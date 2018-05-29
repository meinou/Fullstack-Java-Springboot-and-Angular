package com.example.springdashboard.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity
@Table(name="USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="USER_NAME")
    public String userName;

    @Column(name = "EMAIL")
    public String email;

    @Column(name = "TWITTER")
    public String twitter;

    @Column(name = "IS_ADMIN")
    public boolean isAdmin;
}
