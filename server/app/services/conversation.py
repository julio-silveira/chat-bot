from sqlalchemy.orm import Session, joinedload
from app.models.conversation import Conversation
from datetime import datetime
from typing import List

from app.schemas.conversation import ConversationCreate, ConversationInDb


def create(db: Session, conversation: ConversationCreate) -> ConversationInDb:
    create_data = conversation.model_dump()

    db_obj = Conversation(**create_data)

    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def add_user(db: Session,
             conversation_id: int,
             user_id: int) -> ConversationInDb:
    conversation = db.query(Conversation)\
        .filter(Conversation.id == conversation_id).first()
    conversation.user_id = user_id
    db.commit()
    db.refresh(conversation)
    return conversation


def finish_conversation(db: Session,
                        conversation_id: int,
                        ending_date: datetime
                        ) -> ConversationInDb:
    conversation = db.query(Conversation)\
        .filter(Conversation.id == conversation_id).first()
    conversation.ending_date = ending_date
    db.commit()
    db.refresh(conversation)
    return conversation


def get_user_finished_conversation(
        db: Session,
        user_id: int) -> List[ConversationInDb]:
    conversations = db.query(Conversation)\
        .options(joinedload(Conversation.messages))\
        .filter(Conversation.user_id == user_id)\
        .filter(Conversation.ending_date.isnot(None)).all()

    return conversations
