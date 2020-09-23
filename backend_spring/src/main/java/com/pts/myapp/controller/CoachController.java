package com.pts.myapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pts.myapp.dto.CoachDto;
import com.pts.myapp.service.CoachService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/pts/coaches")
public class CoachController {
	
static final Logger logger = LoggerFactory.getLogger(CoachController.class);
	
	@Autowired
	CoachService coachService;
	
	@ApiOperation(value = "코치 등록")
	@PostMapping("")
	private ResponseEntity<?> create(@RequestBody CoachDto coachDto) {
		logger.debug("코치 등록");
		coachService.create(coachDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	
	
}
