package com.java.books.resource;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.books.domain.User;
import com.java.books.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserResourceImpl implements Resource<User> {
	
	@Autowired
	private UserRepository UserRepo;
	
	@Override
	public ResponseEntity<Optional<User>> findById(Long id) {
		return new ResponseEntity<Optional<User>>((Optional<User>) UserRepo.findById(id), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Collection<User>> findAll() {
		return new ResponseEntity<Collection<User>>((Collection<User>) UserRepo.findAll(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<User> save(@RequestBody User User){
		return new ResponseEntity<>(UserRepo.save(User), HttpStatus.CREATED);
	}
	
	@Override
	public ResponseEntity<User> update(User User) {
		return new ResponseEntity<>(UserRepo.save(User), HttpStatus.OK); // only difference is status code
	}
	
	@Override
	public ResponseEntity<User> deleteById(Long id) {
		if(UserRepo.existsById(id)) {
			UserRepo.deleteById(id);
			return new ResponseEntity<User>(HttpStatus.OK);
		}
		return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
	}	

}
