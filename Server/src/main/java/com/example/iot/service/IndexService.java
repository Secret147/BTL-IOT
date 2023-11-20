package com.example.iot.service;

import java.util.List;

import com.example.iot.entity.Index;


public interface IndexService {
	List<Index> getIndex();
	void updateIndex(Index index);

}
