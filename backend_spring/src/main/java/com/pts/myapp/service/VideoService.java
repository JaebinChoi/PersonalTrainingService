package com.pts.myapp.service;

import java.util.List;

import com.pts.myapp.dto.VideoDto;

public interface VideoService {

	void create(VideoDto video);

	VideoDto read(int id);

	void readAll(List<VideoDto> list, String userId);

	void update(VideoDto video);

	void delete(int id);

	List<VideoDto> readBest();
	
	List<VideoDto> search(String searchword);
}
