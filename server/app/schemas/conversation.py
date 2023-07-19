from app.schemas.user import UserResponse
from app.schemas.message import MessageResponse

from typing import List, Optional

from datetime import datetime

from pydantic import BaseModel


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
    user: Optional[UserResponse]
    messages: List[MessageResponse]


class ConversationInDb(ConversationBase):
    id: int
    starting_date: datetime
    ending_date: Optional[datetime]
    user_id: Optional[int]

    class Config:
        from_attributes = True
