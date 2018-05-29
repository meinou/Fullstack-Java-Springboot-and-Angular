package com.example.springdashboard.models;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity
@Table(name = "NOTIFICATIONS")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CREATED")
    private Timestamp created;

    @Column(name = "NOTIFICATION_TYPE")
    private String type;

    @Column(name = "TITLE")
    private String title;
}
