package com.java.books.repository;

import org.springframework.data.repository.CrudRepository;

import com.java.books.domain.User;

public interface UserRepository extends CrudRepository<User, Long>{
    
}