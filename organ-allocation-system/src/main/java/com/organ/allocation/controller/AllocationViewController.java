package com.organ.allocation.controller;

import com.organ.allocation.model.Allocation;
import com.organ.allocation.repository.AllocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/allocations")
public class AllocationViewController {

    @Autowired
    private AllocationRepository repo;

    @GetMapping
    public List<Allocation> getAllAllocations() {
        return repo.findAll();
    }
}
