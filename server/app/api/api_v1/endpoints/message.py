from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session
from datetime import datetime

from app.schemas.message import MessageResponse, MessageCreate,  MessageCreateRequest  # noqa:E501
from app.schemas.conversation import ConversationInDb, ConversationCreate
from app.api import deps
from app.services import messages, conversation
from app.models.authentication_stage_enum import AUTHENTICATION_STAGE
from app.services.chat_bot import get_bot_response


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

    if not conversation_id:
        new_conversation: ConversationInDb = conversation\
            .create(db=db,
                    conversation=ConversationCreate(user_id=None,
                                                    starting_date=request_time,
                                                    ending_date=None))
        conversation_id = new_conversation.id
        next_authentication_stage = AUTHENTICATION_STAGE.USER.value

    if authentication_stage:
        next_authentication_stage = authentication_stage + 1

    if authentication_stage == AUTHENTICATION_STAGE.USER.value:

        next_authentication_stage = AUTHENTICATION_STAGE.PASSWORD.value

    response_time = datetime.now()
    [response_message, response_type] = get_bot_response(request_message)

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
        access_token=None,
    )

    return response
