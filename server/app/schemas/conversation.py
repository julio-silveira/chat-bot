from app.schemas.message import MessageInDB, MessageResponse

from typing import List, Optional

from datetime import datetime

from pydantic import BaseModel

from app.schemas.user import UserInDb


class ConversationBase(BaseModel):
    user_id: Optional[int]


class ConversationCreate(ConversationBase):
    starting_date: Optional[datetime]
    ending_date: Optional[datetime]


class ConversationUpdate(ConversationBase):
    user_id: Optional[int]
    starting_date: Optional[datetime]
    ending_date: Optional[datetime]


class ConversationResponse(ConversationBase):
    id: int
    starting_date: Optional[datetime]
    ending_date: Optional[datetime]
    username: Optional[str]
    messages: List[MessageResponse]


class ConversationInDb(ConversationBase):
    id: int
    starting_date: datetime
    ending_date: Optional[datetime]
    user_id: Optional[int]
    user: Optional[UserInDb]
    messages: List[MessageInDB]

    class Config:
        from_attributes = True
