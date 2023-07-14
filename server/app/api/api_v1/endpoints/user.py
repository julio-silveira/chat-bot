from fastapi import APIRouter, HTTPException

from schemas.user import UserResponse, UserCreate

router = APIRouter()


@router.get("/",)
async def get_users():
    return {"message": "Hello world!"}


@router.post("/login",
             response_model=UserResponse,
             name="users:login",
             status_code=200)
async def login(user: UserCreate):
    username = user.username
    password = user.password

    if not username or not password:
        return HTTPException(status_code=400,
                             detail="Username or password is empty")
