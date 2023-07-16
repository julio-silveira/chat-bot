from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session
from datetime import datetime

from app.schemas.message import MessageResponse, MessageCreate,  MessageCreateRequest  # noqa:E501
from app.schemas.conversation import ConversationInDb, ConversationCreate
from app.api import deps
from app.services import messages, conversation
from app.models.authentication_stage_enum import AUTHENTICATION_STAGE


router = APIRouter()


@router.post("/",
             response_model=MessageResponse,
             name="message:create",
             status_code=200)
async def create(
                db: Session = Depends(deps.get_db),
                message: MessageCreateRequest = Depends()):
    request_message = message.request_message
    request_time = message.request_time
    conversation_id = message.conversation_id
    authentication_stage = message.authentication_stage
    next_authentication_stage = None

    if not conversation_id:
        new_conversation: ConversationInDb = conversation\
            .create(db, ConversationCreate(starting_date=request_time,))
        conversation_id = new_conversation.id
        next_authentication_stage = AUTHENTICATION_STAGE.USER.value

    if authentication_stage:
        next_authentication_stage = authentication_stage + 1

    new_message = messages.create(db, MessageCreate(
        request_message=request_message,
        response_message="placeholder",
        request_time=request_time,
        response_time=datetime.now(),
        conversation_id=conversation_id,
    ))

    return MessageResponse(
        id=new_message.id,
        request_message=new_message.request_message,
        response_message=new_message.response_message,
        request_time=new_message.request_time,
        response_time=new_message.response_time,
        conversation_id=new_message.conversation_id,
        next_authentication_stage=next_authentication_stage,
        access_token=None,
    )
