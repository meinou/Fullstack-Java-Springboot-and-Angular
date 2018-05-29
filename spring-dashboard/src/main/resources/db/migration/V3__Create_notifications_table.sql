create table NOTIFICATIONS (
    ID serial,
    CREATED timestamp DEFAULT NOW() NOT NULL,
    NOTIFICATION_TYPE varchar(20) NOT NULL,
    TITLE varchar(100)
);