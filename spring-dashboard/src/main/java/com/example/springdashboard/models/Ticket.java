package com.example.springdashboard.models;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity
@Table(name = "TICKETS")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    RESOLVED boolean DEFAULT FALSE NOT NULL
    @Column(name = "RESOLVED")
    private boolean resolved;

//    LAST_MODIFIED timestamp DEFAULT NOW() NOT NULL,
    @Column(name = "LAST_MODIFIED")
    @CreationTimestamp
    private Timestamp lastModified;

    @Column(name = "TICKET_TYPE")
    private String type;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;
}
