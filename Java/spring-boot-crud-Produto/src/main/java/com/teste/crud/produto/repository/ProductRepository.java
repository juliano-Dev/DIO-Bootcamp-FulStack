package com.teste.crud.produto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.crud.produto.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {
    Product findByName(String name);
}

