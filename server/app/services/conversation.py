from sqlalchemy.orm import Session
from app.models.conversation import Conversation


from app.schemas.conversation import ConversationCreate, ConversationInDb


def create(db: Session, conversation: ConversationCreate) -> ConversationInDb:
    create_data = conversation.model_dump()

    db_obj = Conversation(**create_data)

    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj
