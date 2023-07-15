from typing import List, Optional

from datetime import datetime

from pydantic import BaseModel

from app.schemas.conversation import ConversationResponse
from app.schemas.user import UserResponse


class ConversationBase(BaseModel):
    user_id: int


class ConversationResponse(ConversationBase):
    id: int
    starting_date: Optional[datetime]
    ending_date: Optional[datetime]
    user: Optional[UserResponse]
    conversation: List[ConversationResponse]


class ConversationInDb(ConversationBase):
    id: int
    starting_date: datetime
    ending_date: datetime
    user_id: int
