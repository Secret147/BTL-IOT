package com.example.iot.controller;


import com.example.iot.entity.Index;
import com.example.iot.service.IndexService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RequestMapping("/api/index")
@RestController
@CrossOrigin
public class IndexController {
	@Autowired
	private IndexService indexSe;
	
	@GetMapping("/count")
	public ResponseEntity<?> getIndex(){
		List<Index> index = indexSe.getIndex();
		return ResponseEntity.ok(index);
		
	}
	@PutMapping("/newindex")
    public ResponseEntity<?> updateIndex(@RequestBody Index index){
		indexSe.updateIndex(index);
		return ResponseEntity.ok("Success");
	}
}
