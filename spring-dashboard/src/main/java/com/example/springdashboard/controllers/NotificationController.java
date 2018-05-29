package com.example.springdashboard.controllers;

import com.example.springdashboard.models.Notification;
import com.example.springdashboard.models.Ticket;
import com.example.springdashboard.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class NotificationController {

    @Autowired
    private NotificationRepository notificationRepository;

    @GetMapping("/notifications")
    public Iterable<Notification> getAllNotifications(@RequestParam(value = "type", required = false) String type){
        if (type == null)
            return notificationRepository.findAll();
        else
            return notificationRepository.findByType(type);
    }

    @GetMapping("/notifications/{notificationId}")
    public Optional<Notification> getNotificationById(@PathVariable Long notificationId) {
        return notificationRepository.findById(notificationId);
    }

    @PostMapping("/notifications")
    public Notification addNotification(@RequestBody Notification newNotification) {
        return notificationRepository.save(newNotification);
    }

    @PutMapping("/notifications/{notificationId}")
    public Notification updateNotificationById(@PathVariable Long notificationId, @RequestBody Notification notificationRequest) {
        Notification notificationFromDb = notificationRepository.findById(notificationId).get();
        notificationFromDb.setTitle(notificationRequest.getTitle());
        notificationFromDb.setType(notificationRequest.getType());

        return notificationRepository.save(notificationFromDb);
    }
}
