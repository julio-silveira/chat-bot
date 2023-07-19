from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session
from datetime import datetime

from app.schemas.message import MessageResponse, MessageCreate,  MessageCreateRequest  # noqa:E501
from app.schemas.conversation import ConversationInDb, ConversationCreate
from app.api import deps
from app.services import messages, conversation, users
from app.models.authentication_stage_enum import AUTHENTICATION_STAGE
from app.services.chat_bot import get_bot_response, check_is_starting_message


router = APIRouter()


@router.post("/",
             response_model=MessageResponse,
             name="message:create",
             status_code=200)
def create(message: MessageCreateRequest, db: Session = Depends(deps.get_db)):
    request_message = message.request_message
    request_time = datetime.strptime(message.request_time,
                                     "%Y-%m-%dT%H:%M:%S.%f%z")
    conversation_id = message.conversation_id
    authentication_stage = message.authentication_stage
    next_authentication_stage = None
    user_id = message.user_id
    is_finished = False

    if not conversation_id:
        is_starting_message = check_is_starting_message(request_message)

        if is_starting_message:
            new_conversation: ConversationInDb = conversation\
                .create(db=db,
                        conversation=ConversationCreate(user_id=user_id,
                                                        starting_date=request_time,  # noqa:E501
                                                        ending_date=None))
            conversation_id = new_conversation.id
            if not user_id:
                next_authentication_stage = AUTHENTICATION_STAGE.USER.value
        else:
            response = MessageResponse(
                id=0,
                request_message=request_message,
                response_message='Please start a conversation first.',
                request_time=request_time.isoformat(),
                response_time=request_time.isoformat(),
                response_type=0,
                conversation_id=0,
                next_authentication_stage=0,
                user_id=None,
                is_finished=True)
            return response

    if authentication_stage == AUTHENTICATION_STAGE.USER.value:
        request_message = 'username'
        next_authentication_stage = AUTHENTICATION_STAGE.PASSWORD.value

    if authentication_stage == AUTHENTICATION_STAGE.PASSWORD.value:
        username = messages.get_last_message(db=db,
                                             conversation_id=conversation_id)\
                                                .request_message
        user = users.check_user(db=db,
                                username=username,
                                password=request_message)

        if user:
            user_id = user.id
            conversation.add_user(db=db,
                                  user_id=user_id,
                                  conversation_id=conversation_id)
            request_message = 'right-password'
            next_authentication_stage = AUTHENTICATION_STAGE.FINISHED.value

        else:
            request_message = 'wrong-password'
            next_authentication_stage = AUTHENTICATION_STAGE.USER.value

    response_time = datetime.now()
    [response_message, response_type] = get_bot_response(input_text=request_message, is_auth=bool(user_id))  # noqa:E501

    if response_type == 2:
        conversation.finish_conversation(db=db,
                                         conversation_id=conversation_id,
                                         ending_date=response_time)
        response_type = 0
        is_finished = True

    new_message = messages.create(db=db, message=MessageCreate(
        request_message=message.request_message,
        response_message=response_message,
        request_time=request_time,
        response_time=response_time,
        conversation_id=conversation_id,
    ))

    iso_request_time = request_time.isoformat()
    iso_response_time = response_time.isoformat()

    response = MessageResponse(
        id=new_message.id,
        request_message=request_message,
        response_message=new_message.response_message,
        request_time=iso_request_time,
        response_time=iso_response_time,
        response_type=response_type,
        conversation_id=new_message.conversation_id,
        next_authentication_stage=next_authentication_stage,
        user_id=user_id,
        is_finished=is_finished
    )

    return response
