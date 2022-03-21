package com.java.books.repository;
import org.springframework.data.repository.CrudRepository;

import com.java.books.domain.Order;

public interface OrderRepository extends CrudRepository<Order, Long>{
    
}
