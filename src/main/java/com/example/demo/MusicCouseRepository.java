package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MusicCouseRepository extends CrudRepository<MusicCouse, String> {
        Techer findByname(
                @Param("name") String name
       );
}