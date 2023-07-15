from typing import Optional

from datetime import datetime

from pydantic import BaseModel


class MessageBase(BaseModel):
    ...


class MessageCreate(MessageBase):
    request_message: str
    request_time: datetime
    conversation_id: Optional[int]
    is_authenticating: Optional[bool]


class MessageResponse(MessageBase):
    id: int
    request_message: str
    response_message: str
    request_time: datetime
    response_time: datetime
    conversation_id: int
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
