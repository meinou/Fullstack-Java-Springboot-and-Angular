create table USERS (
    ID serial,
    USER_NAME varchar(100) NOT NULL,
    EMAIL varchar(100) NOT NULL,
    TWITTER varchar(100),
    IS_ADMIN boolean
);