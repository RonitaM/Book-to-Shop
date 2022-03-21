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

import com.java.books.domain.Category;
import com.java.books.repository.CategoryRepository;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins="http://localhost:3000")
public class CategoryResourceImpl implements Resource<Category> {
	
	@Autowired
	private CategoryRepository CategoryRepo;
	
	@Override
	public ResponseEntity<Optional<Category>> findById(Long id) {
		return new ResponseEntity<Optional<Category>>((Optional<Category>) CategoryRepo.findById(id), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Collection<Category>> findAll() {
		return new ResponseEntity<Collection<Category>>((Collection<Category>) CategoryRepo.findAll(), HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<Category> save(@RequestBody Category Category){
		return new ResponseEntity<>(CategoryRepo.save(Category), HttpStatus.CREATED);
	}
	
	@Override
	public ResponseEntity<Category> update(Category Category) {
		return new ResponseEntity<>(CategoryRepo.save(Category), HttpStatus.OK); // only difference is status code
	}
	
	@Override
	public ResponseEntity<Category> deleteById(Long id) {
		if(CategoryRepo.existsById(id)) {
			CategoryRepo.deleteById(id);
			return new ResponseEntity<Category>(HttpStatus.OK);
		}
		return new ResponseEntity<Category>(HttpStatus.NOT_FOUND);
	}	

}
