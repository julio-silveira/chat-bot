from sqlalchemy_utils import create_database, database_exists

from app.db.base_class import Base # noqa
from app.models.user import User # noqa
from app.models.conversation import Conversation # noqa
from app.models.message import Message # noqa
from app.core.settings import settings


def validate_database():
    if not database_exists(settings.SQLALCHEMY_DATABASE_URI):
        create_database(settings.SQLALCHEMY_DATABASE_URI)
