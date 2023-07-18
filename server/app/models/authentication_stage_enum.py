from enum import Enum


class AUTHENTICATION_STAGE(int, Enum):
    NONE = 0
    USER = 1
    PASSWORD = 2
    FINISHED = 3
