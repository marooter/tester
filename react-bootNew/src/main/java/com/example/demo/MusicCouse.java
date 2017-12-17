package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class MusicCouse {

    private @Id @GeneratedValue Long id;
    private String MusicCouseID;
    private String price;
    private String date;
    private String time;

    private  MusicCouse() {}

    public  MusicCouse(String MusicCouseID,String price, String date,String time) {
        this.MusicCouseID = MusicCouseID;
        this.price = price;
        this.date = date;
        this.time = time;

    }
}