package com.example.demo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.*;

import lombok.Data;

@Data
@Entity
public class RecordMusicCouse {

	private @Id @GeneratedValue Long RecordMusicCouseId;
	@ManyToOne
	private String techer;

    private String member;
	private String date;
	private String price;
	private String couseTime;
	private String musicCouse;


	//@ManyToOne
	//private MusicCouse musicCouse;

	private RecordMusicCouse() {}

	public RecordMusicCouse(String techer,String member,String date,String price,String couseTime,String musicCouse) {
		this.member = member;
		this.date = date;
		this.techer = techer;
		this.musicCouse = musicCouse;
		this.price = price;
		this.couseTime = couseTime;

	}
}