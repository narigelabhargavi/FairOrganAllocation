package com.organ.allocation.controller;

import com.organ.allocation.model.Donor;
import com.organ.allocation.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/donors")
public class DonorController {

    @Autowired
    private DonorRepository repo;

    @PostMapping
    public Donor addDonor(@RequestBody Donor d) {
        return repo.save(d);
    }

    @GetMapping
    public List<Donor> getAll() {
        return repo.findAll();
    }
}