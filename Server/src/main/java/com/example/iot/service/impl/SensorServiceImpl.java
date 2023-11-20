package com.example.iot.service.impl;

import com.example.iot.entity.Index;
import com.example.iot.entity.Sensor;
import com.example.iot.repository.IndexRepository;
import com.example.iot.service.SensorService;
import com.example.iot.service.dto.SensorDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class SensorServiceImpl implements SensorService {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private IndexRepository indexRe;
    @Override
    public long sumTime() {
        return sum();
    }

    @Override
    public List<SensorDto> search() {
        StringBuilder sql = new StringBuilder(" select * from dbb.sensor s ");
        Map<String, Objects> parameter = new HashMap<>();
        List<Sensor> sensorList = namedParameterJdbcTemplate.query(sql.toString(), parameter, new BeanPropertyRowMapper<>(Sensor.class));
        List<SensorDto> sensorDtoList = new ArrayList<>();
        Index index = indexRe.findById((long) 1).get();
        sensorList.forEach(sensor -> {
              SensorDto sensorDto = objectMapper.convertValue(sensor, SensorDto.class);
              sensorDto.setTimeLight((index.getThoigiancanthapsang()*3600-(sensor.getEnd().getTime() - sensor.getStart().getTime())/1000));
              sensorDtoList.add(sensorDto);
        });
        return sensorDtoList;
    }

    private Long sum(){
        StringBuilder sql = new StringBuilder(" SELECT SUM(index_system.thoigiancanthapsang * 3600 - TIMESTAMPDIFF(SECOND, s.start, s.end)) AS totalDuration\r\n"
        		+ "FROM dbb.sensor s\r\n"
        		+ "CROSS JOIN dbb.index_system\r\n"
        		+ "WHERE dbb.index_system.id = 1;\r\n"
        		+ ""
        		+ " ");
        Map<String, Objects> parameter = new HashMap<>();
        return namedParameterJdbcTemplate.queryForObject(sql.toString(), parameter, Long.class);
    }
}
