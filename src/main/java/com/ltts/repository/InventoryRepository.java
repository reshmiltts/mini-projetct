package com.ltts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.ltts.model.Inventory;




@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

}
