from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm.session import Session

from app.schemas.user import UserResponse, UserCreate
from app.api import deps

router = APIRouter()


@router.get("/",)
async def get_users():
    return {"message": "Hello world!"}


@router.post("/login",
             response_model=UserResponse,
             name="users:login",
             status_code=200)
async def login(
                db: Session = Depends(deps.get_db),
                user: UserCreate = Depends()):
    username = user.username
    password = user.password

    if not username or not password:
        return HTTPException(status_code=400,
                             detail="Username or password is empty")
