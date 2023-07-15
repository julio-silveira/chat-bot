from sqlalchemy import Column, Integer, DateTime, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.base_class import Base


class Message(Base):
    id = Column(Integer, primary_key=True, index=True)
    request_message = Column(String, nullable=False)
    response_message = Column(String, nullable=False)
    request_time = Column(DateTime,
                          nullable=False,
                          server_default=func.now())
    response_time = Column(DateTime,
                           nullable=False,
                           server_default=func.now())
    conversation_id = Column(Integer,
                             ForeignKey("conversation.id"),
                             nullable=False)
    conversation = relationship("Conversation", back_populates="messages")
