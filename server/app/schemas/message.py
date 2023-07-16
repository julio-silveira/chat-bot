from typing import Optional

from datetime import datetime

from pydantic import BaseModel

from app.models.authentication_stage_enum import AUTHENTICATION_STAGE


class MessageBase(BaseModel):
    ...


class MessageCreateRequest(MessageBase):
    request_message: str
    request_time: datetime
    conversation_id: Optional[int]
    authentication_stage: Optional[AUTHENTICATION_STAGE]


class MessageCreate(MessageBase):
    request_message: str
    response_message: str
    request_time: datetime
    response_time: datetime
    conversation_id: int
    

class MessageResponse(MessageBase):
    id: int
    request_message: str
    response_message: str
    request_time: datetime
    response_time: datetime
    conversation_id: int
    next_authentication_stage: Optional[AUTHENTICATION_STAGE]
    access_token: Optional[str]


class MessageInDB(BaseModel):
    id: int
    request_message: str
    response_message: str
    request_time: datetime
    response_time: datetime
    conversation_id: int

    class Config:
        orm_mode = True
