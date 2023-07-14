from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from server.core.settings import settings


engine = create_engine(settings.DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
