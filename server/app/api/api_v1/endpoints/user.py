from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

from app.schemas.user import UserCreate
from app.services import users
from app.api import deps


router = APIRouter()


@router.post("/create",
             name="users:login",
             status_code=200)
async def create(
                user: UserCreate,
                db: Session = Depends(deps.get_db)):
    username = user.username
    password = user.password

    if not username or not password:
        return HTTPException(status_code=400,
                             detail="Username or password is empty")

    has_user = users.get_user(db=db, username=username)

    if has_user:
        return HTTPException(status_code=400,
                             detail="Username already in use")

    user = users.create_user(db=db, username=username, password=password)

    return {"message": "Created user successfully, you can use the chat with your account now"}  # noqa:E501
