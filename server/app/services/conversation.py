from sqlalchemy.orm.session import Session


from app.schemas.conversation import ConversationCreate, ConversationInDb


def create(db: Session, conversation: ConversationCreate) -> ConversationInDb:
    db.add(conversation)
    db.commit()
    db.refresh(conversation)
    return conversation
