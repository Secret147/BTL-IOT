package com.example.iot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
public class WebIOTApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebIOTApplication.class, args);
        System.out.println("success");
    }

}



