package com.example.iot.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@Table(name = "indexSystem")
@NoArgsConstructor
@AllArgsConstructor
public class Index {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "congsuat")
    private Long congsuat;
    @Column(name = "giadien")
    private Long giadien;
    @Column(name = "thoigiancanthapsang")
    private Long thoigiancanthapsang;
    

}
