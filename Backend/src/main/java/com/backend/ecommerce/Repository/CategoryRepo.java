package com.backend.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.ecommerce.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
