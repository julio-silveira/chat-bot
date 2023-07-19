from sqlalchemy.orm.session import Session

from app.models.user import User


def check_user(db: Session, username, password):
    user = db.query(User).filter(User.username == username).first()
    if user and user.password == password:
        return user
    return None


def get_user(db: Session, username):
    return db.query(User).filter(User.username == username).first()


def create_user(db: Session, username, password):
    user = User(username=username, password=password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
