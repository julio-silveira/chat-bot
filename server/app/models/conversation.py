from sqlalchemy import Column, Integer, Date, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Conversation(Base):
    id = Column(Integer, primary_key=True, index=True)
    starting_date = Column(Date, nullable=True)
    ending_date = Column(Date, nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"),  nullable=False)
    user = relationship("User", back_populates="conversations")
