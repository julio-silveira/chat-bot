import pathlib
import os

# from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings
from typing import Optional

from dotenv import load_dotenv

ROOT = pathlib.Path(__file__).resolve().parent.parent
load_dotenv()


class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    # BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = ["*"]
    SQLALCHEMY_DATABASE_URI: Optional[str] = os.getenv("DB_URL")
    PROJECT_NAME: str = "Chat Bot"
    ADMIN_USERNAME: str = "admin"
    ADMIN_PASSWORD: str = "admin"

    class Config:
        case_sensitive = True


settings = Settings()
