package com.example.springdashboard.controllers;

import com.example.springdashboard.models.Notification;
import com.example.springdashboard.models.Ticket;
import com.example.springdashboard.repositories.NotificationRepository;
import com.example.springdashboard.repositories.TicketRepository;
import org.hibernate.type.IntegerType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TicketController {

    @Autowired
    TicketRepository ticketRepository;


    @Autowired
    EntityManager entityManager;

    @Autowired
    NotificationRepository  notificationRepository;

    @GetMapping("/tickets")
    public Iterable<Ticket> getAllByType(@RequestParam(value = "type", required = false) String type) {
        if (type == null) {
            return ticketRepository.findAll();
        } else {
            return ticketRepository.findAllByType(type);
        }
    }

    

    @GetMapping("/graph/tickets/{type}/{date}")
    public Iterable<Integer> getGraphData(
            @PathVariable("date") @DateTimeFormat(pattern = "yyyyMMdd") Date date,
            @PathVariable("type") String type
    ) {
        Query query = entityManager.createNativeQuery("SELECT date_part('day', date(last_modified)) as day, count(last_modified) as total \n" +
                "FROM tickets\n" +
                "WHERE (tickets.last_modified BETWEEN ?1 AND ?2)\n" +
                "AND ticket_type=?3 \n" +
                "GROUP BY date(\"last_modified\")\n" +
                "ORDER BY count(last_modified) DESC");

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, +1);
        Date endDate = calendar.getTime();

        query.setParameter(1, date);
        query.setParameter(2, endDate);
        query.setParameter(3, type);

        @SuppressWarnings("unchecked")
        List<Object[]> items = query.getResultList();
        Map<Integer, Integer> daysToCount = new HashMap<>();

        for(Object[] array : items) {
            daysToCount.put(((Double)array[0]).intValue(), ((BigInteger)array[1]).intValue());
        }

        int daysInMonth = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);

        List<Integer> result = new ArrayList<>();

        for (int i = 1; i <= daysInMonth; i++) {
            if (daysToCount.containsKey(i)) {
                result.add(daysToCount.get(i));
            } else {
                result.add(0);
            }
        }

        return result;
    }

    @GetMapping("/tickets/{ticketId}")
    public Optional<Ticket> findUserById(@PathVariable Long ticketId) {
        return ticketRepository.findById(ticketId);
    }

    @GetMapping("/tickets/{type}/unresolved")
    public Iterable<Ticket> getAllUnresolved(@PathVariable String type) {
        Iterable<Ticket> newCollection;
        return ticketRepository.getAllByTypeAndResolved(type, false);
    }


    @DeleteMapping("/tickets/{ticketId}")
    public HttpStatus deleteTicketById(@PathVariable Long ticketId) {
        ticketRepository.deleteById(ticketId);
        return HttpStatus.OK;
    }

    @PostMapping("/tickets")
    public Ticket createNewTicket(@RequestBody Ticket newTicket) {
        Ticket ticket = null;

        try {
            ticket = ticketRepository.save(newTicket);
        } catch(Exception ex) {
            // log
        }

         if (ticket != null) {
             Notification notification = new Notification();
             notification.setType(ticket.getType());
             notification.setTitle(ticket.getTitle());
             notification.setCreated(ticket.getLastModified());
            notificationRepository.save(notification);
         }

         return ticket;
    }


    @PutMapping("/tickets/{ticketId}")
    public Ticket updateTicketById(@PathVariable Long ticketId, @RequestBody Ticket ticketRequest) {

        Ticket ticketFromDb = ticketRepository.findById(ticketId).get();
//        Date date = new Date();
//        LocalTime local = LocalTime.now();
//        System.out.println(new Timestamp(date.getTime()));
//        ticketFromDb.setLastModified(new Timestamp(date.getTime()));
        Timestamp time = ticketRequest.getLastModified();
        ticketFromDb.setLastModified(time);
        ticketFromDb.setTitle(ticketRequest.getTitle());
        ticketFromDb.setDescription(ticketRequest.getDescription());
        ticketFromDb.setResolved(ticketRequest.isResolved());

        return ticketRepository.save(ticketFromDb);
    }


}
