package com.example.demo;

import com.example.demo.Techer;
import com.example.demo.TecherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final TecherRepository techerRepository;
	private final MusicCouseRepository musicCouseRepository;

    @Autowired
    public DatabaseLoader(TecherRepository repository,MusicCouseRepository musicCouseRepository) {

    	this.techerRepository = repository;
		this.musicCouseRepository = musicCouseRepository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.techerRepository.save(new Techer("ก้อง ห้วยไร่","080-1037223"));
		this.techerRepository.save(new Techer("กระแต อาร์สยาม","093-8533315"));
		this.techerRepository.save(new Techer("ไผ่ พงศธร","094-3214789"));
		this.techerRepository.save(new Techer("จินตหรา พูนลาภ","092-8902471"));
		this.techerRepository.save(new Techer("มนต์แคน แก่นคูน","095-2183490"));

		this.musicCouseRepository.save(new MusicCouse("สอนกีต้า","3,000-5,000","10-12-2560","10.00-22.00 น."));
		this.musicCouseRepository.save(new MusicCouse("สอนกลองชุด","3,000-5,000","10-12-2560","10.00-22.00 น."));
		this.musicCouseRepository.save(new MusicCouse("สอนเบส","3,000-5,000","10-12-2560","10.00-22.00 น."));
		this.musicCouseRepository.save(new MusicCouse("สอนร้องเพลง","3,000-5,000","10-12-2560","10.00-22.00 น."));

	}
}