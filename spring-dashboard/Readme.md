
### Following addons in application.properties allows logging of db responses
logging.level.org.springframework.web=INFO
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
spring.jpa.properties.hibernate.format_sql=true

# API allows to create new Tickets of the types of: COMMENT, TASK, ORDER and SUPPORT

# Each ticket creation fires new notification with the time of creation same as Ticket has been last modified.

# Allowed methods for tickets:

## GetGraphData()

 At the `http://localhost:8080//graph/tickets/{type}/{date}` gets number of tickets of certain type per each day in month since start date

## getAllByType

- Through the address of `http://localhost:8080/tickets` returns all tickets of all types

- Through the address of `http://localhost:8080/tickets?type={type}` where the {type} is a certain type returns all the tickets of this type

## getUserById

through `http://localhost:8080/tickets/{ticketId}` where the {ticketId} is a certain id of only one ticket

### getAllUnresolved

through `http://localhost:8080/tickets/{type}/unresolved` returns all tickets of certain type {type} which are not resolved yet

### Delete and Update

 Through `http://localhost:8080/tickets/{ticketId}` deletes or updates certain ticket through it's unique id

### createNewTicket

 uses `http://localhost:8080/tickets` to add new Ticket to database and in a case of successful creation creates new Notification


# Allowed methods for notification

## Put and get with certain unique id

  with the route `http://localhost:8080/notifications/{notificationId}`

## Post new Notification

    to `http://localhost:8080/notifications/`

## Get All Notifications

    all existing with `http://localhost:8080/notifications/`
    and All of certain type from `http://localhost:8080/notifications?type={type}`