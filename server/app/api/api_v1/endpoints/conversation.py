from fastapi import APIRouter, Depends
from sqlalchemy.orm.session import Session

from app.services import conversation
from app.api import deps


router = APIRouter()


@router.get("/{user_id}", status_code=200)
async def get(user_id: int, db: Session = Depends(deps.get_db)):
    finished_conversation = conversation\
        .get_user_finished_conversation(db=db,
                                        user_id=user_id)
    return finished_conversation
