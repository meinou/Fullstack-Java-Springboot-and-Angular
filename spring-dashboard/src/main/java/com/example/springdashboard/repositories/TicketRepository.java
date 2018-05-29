package com.example.springdashboard.repositories;

import com.example.springdashboard.models.Ticket;
import com.example.springdashboard.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TicketRepository extends CrudRepository<Ticket, Long> {
    //Optional<User> findByUserName(String userName);
    Iterable<Ticket> findAllByType(String type);
    Iterable<Ticket> getAllByTypeAndResolved(String type, boolean resolved);


}
