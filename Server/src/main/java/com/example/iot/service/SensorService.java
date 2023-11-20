package com.example.iot.service;

import java.util.List;

import com.example.iot.service.dto.SensorDto;

public interface SensorService {
    long sumTime();

    List<SensorDto> search ();
}
