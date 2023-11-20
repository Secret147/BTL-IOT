package com.example.iot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.iot.entity.Sensor;

@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {
}
