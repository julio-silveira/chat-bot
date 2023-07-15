from pydantic import BaseModel


class UserBase(BaseModel):
    username: str


class UserCreate(UserBase):
    username: str
    password: str


class UserResponse(UserBase):
    id: int
    username: str

    class Config:
        orm_mode = True
