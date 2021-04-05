package com.ltts.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ltts.exception.ResourceNotFoundException;
import com.ltts.model.Inventory;
import com.ltts.repository.InventoryRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InventoryController {

    @Autowired
    private InventoryRepository inventoryRepo;

    
    @GetMapping(value="/inventory")
    public List < Inventory > getAllInventory() {
        return inventoryRepo.findAll();
    }

    @PostMapping("/inventory")
    public Inventory createInventory(@RequestBody Inventory inventory) {
        return inventoryRepo.save(inventory);
    }

    @GetMapping("/inventory/{id}")
    public ResponseEntity < Inventory > getInventoryById(@PathVariable Long id) {
        Inventory inventory = inventoryRepo.findById(id)
            .orElseThrow(()->new ResourceNotFoundException("Inventory not Found :" + id));
        return ResponseEntity.ok(inventory);
    }


    @PutMapping("/inventory/{id}")
    public ResponseEntity < Inventory > updateInventory(@PathVariable Long id, @RequestBody Inventory inventoryUpdate) {
        Inventory inventory = inventoryRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Inventory not Found :" + id));

        inventory.setName(inventoryUpdate.getName());
        inventory.setSerialNo(inventoryUpdate.getSerialNo());
        inventory.setDescription(inventoryUpdate.getDescription());

        Inventory updatedInventory = inventoryRepo.save(inventory);
        return ResponseEntity.ok(updatedInventory);
    }

    @DeleteMapping("/inventory/{id}")
    public ResponseEntity < Map < String, Boolean >> deleteInventory(@PathVariable Long id) {
        Inventory inventory = inventoryRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Inventory not Found:" + id));

        inventoryRepo.delete(inventory);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}