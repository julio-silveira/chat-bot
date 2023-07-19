from fastapi import APIRouter

from app.api.api_v1.endpoints import user, message, conversation


api_router = APIRouter()
api_router.include_router(user.router, prefix="/user", tags=["user"])
api_router.include_router(message.router, prefix="/message", tags=["message"])
api_router.include_router(conversation.router, prefix="/conversation", tags=["conversation"])  # noqa:E501
