package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MakeRentController {

    @Autowired
    RecordRepository recordRepository;
    @Autowired
    TecherRepository recherRepository;
    @Autowired
    MusicCouseRepository musicCouseRepository;

    @ResponseBody
    @RequestMapping(path = "/couse/{a}/date/{d}/time/{e}/techer/{g}/user/{i}/price/{j}", method = RequestMethod.GET)
    public String recordmusiccouse(@PathVariable String a,@PathVariable String d,@PathVariable String e,@PathVariable String g,@PathVariable String i, @PathVariable String j) {
        MusicCouse musicCouse = this.musicCouseRepository.findOne(a);
        //Techer techer = this.recherRepository.findOne(g);
        RecordMusicCouse  recordmusiccouse = new RecordMusicCouse(musicCouse,g,d,e,i,j);
        this.recordRepository.save(recordmusiccouse);
        return "{\"status\":\"Voted\"}";
    }
}