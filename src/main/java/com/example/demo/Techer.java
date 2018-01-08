package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Techer {

	private @Id @GeneratedValue Long id;
	private String name;
	private String tel;

	private Techer() {}

	public Techer(String name, String tel) {
			this.name = name;
			this.tel = tel;
	}
}