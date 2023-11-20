package com.example.iot.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.iot.entity.Index;
import com.example.iot.repository.IndexRepository;
import com.example.iot.service.IndexService;
@Service
@Transactional
public class IndexServiceImpl implements IndexService{
	@Autowired
    private IndexRepository IndexRe;
	
	@Override
	public List<Index> getIndex() {
		List<Index> index = IndexRe.findAll();
		return index;
	}
	
	@Override
    public void updateIndex(Index index) {
		IndexRe.save(index);
	}

}
