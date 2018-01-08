package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface TecherRepository extends CrudRepository<Techer, String> {
    Techer findByname(
            @Param("name") String name
    );
}