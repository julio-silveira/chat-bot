from sqlalchemy.orm.session import Session


from app.schemas.message import MessageCreate

from app.models.message import Message


def create(db: Session, message: MessageCreate):
    create_data = message.model_dump()

    db_obj = Message(**create_data)

    db.add(db_obj)
    db.commit()
    db.refresh(db_obj)
    return db_obj


def get_last_message(db: Session, conversation_id: int):
    return db.query(Message)\
        .filter(Message.conversation_id == conversation_id)\
        .order_by(Message.id.desc()).first()
