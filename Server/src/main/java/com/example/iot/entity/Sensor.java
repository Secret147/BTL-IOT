package com.example.iot.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name = "sensor")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Sensor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "start")
    private Time start;
    @Column(name = "end")
    private Time end;
    @Column(name = "date_storage")
    private Date dateStorage;
}
