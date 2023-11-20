package com.example.iot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.iot.entity.Index;
@Repository
public interface IndexRepository extends JpaRepository<Index, Long> {

}
