from repository.userRepository import UserRepository
from database import SessionLocal


def check_user(username, password):
    user = UserRepository.get_user_by_username(SessionLocal, username)
    if user is None:
        return {"error": "User not found"}
    if user.password != password:
        return {"error": "Wrong password"}
    return user