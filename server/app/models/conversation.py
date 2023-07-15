from sqlalchemy import Column, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Conversation(Base):
    id = Column(Integer, primary_key=True, index=True)
    starting_date = Column(DateTime, nullable=True)
    ending_date = Column(DateTime, nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"),  nullable=True)
    user = relationship("User", back_populates="conversations")
    messages = relationship("Message",
                            cascade="all, delete-orphan",
                            back_populates="conversation",
                            uselist=True
                            )
