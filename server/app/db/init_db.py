import logging

from sqlalchemy.orm import Session

# from server import schemas
from server.db import base  # noqa: F401
# from server.core.settings import settings

logger = logging.getLogger(__name__)


def init_db(db: Session) -> None:
    logger.info("Creating initial data")
    pass
