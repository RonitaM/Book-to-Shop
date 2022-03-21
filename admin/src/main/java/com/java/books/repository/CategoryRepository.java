package com.java.books.repository;

import org.springframework.data.repository.CrudRepository;

import com.java.books.domain.Category;

public interface CategoryRepository extends CrudRepository<Category, Long>{
    
}
