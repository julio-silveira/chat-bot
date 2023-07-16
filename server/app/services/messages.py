from sqlalchemy.orm.session import Session


from app.schemas.message import MessageCreate


def create(db: Session, message: MessageCreate):
    db.add(message)
    db.commit()
    db.refresh(message)
    return message
