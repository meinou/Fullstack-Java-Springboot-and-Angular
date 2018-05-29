package com.example.springdashboard.repositories;

import com.example.springdashboard.models.Notification;
import org.springframework.data.repository.CrudRepository;

public interface NotificationRepository extends CrudRepository<Notification, Long> {
    Iterable<Notification> findByType(String type);
}
