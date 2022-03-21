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

import com.java.books.domain.Order;
import com.java.books.repository.OrderRepository;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins="http://localhost:3000")
public class OrderResourceImpl implements Resource<Order> {
	
	@Autowired
	private OrderRepository OrderRepo;
	
	@Override
	public ResponseEntity<Optional<Order>> findById(Long id) {
		return new ResponseEntity<Optional<Order>>((Optional<Order>) OrderRepo.findById(id), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Collection<Order>> findAll() {
		return new ResponseEntity<Collection<Order>>((Collection<Order>) OrderRepo.findAll(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Order> save(@RequestBody Order Order){
		return new ResponseEntity<>(OrderRepo.save(Order), HttpStatus.CREATED);
	}
	
	@Override
	public ResponseEntity<Order> update(Order Order) {
		return new ResponseEntity<>(OrderRepo.save(Order), HttpStatus.OK); // only difference is status code
	}
	
	@Override
	public ResponseEntity<Order> deleteById(Long id) {
		if(OrderRepo.existsById(id)) {
			OrderRepo.deleteById(id);
			return new ResponseEntity<Order>(HttpStatus.OK);
		}
		return new ResponseEntity<Order>(HttpStatus.NOT_FOUND);
	}	

}
