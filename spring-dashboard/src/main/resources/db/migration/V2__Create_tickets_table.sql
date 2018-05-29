create table TICKETS (
    ID serial,
    LAST_MODIFIED timestamp DEFAULT NOW() NOT NULL,
    RESOLVED boolean DEFAULT FALSE NOT NULL,

    TICKET_TYPE varchar(20) NOT NULL,
    TITLE varchar(100) NOT NULL,
    DESCRIPTION varchar(255)
);