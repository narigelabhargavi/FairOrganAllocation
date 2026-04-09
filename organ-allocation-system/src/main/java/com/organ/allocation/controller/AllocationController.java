package com.organ.allocation.controller;

import com.organ.allocation.model.Patient;
import com.organ.allocation.model.Donor;
import com.organ.allocation.model.Allocation;
import com.organ.allocation.repository.AllocationRepository;
import com.organ.allocation.repository.PatientRepository;
import com.organ.allocation.repository.DonorRepository;
import com.organ.allocation.service.AllocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/allocate")
public class AllocationController {

    @Autowired
    private PatientRepository patientRepo;

    @Autowired
    private DonorRepository donorRepo;

    @Autowired
    private AllocationRepository allocationRepo;   

    @Autowired
    private AllocationService service;

    @GetMapping("/{donorId}")
    public Patient allocate(@PathVariable Long donorId) {

      
        Donor donor = donorRepo.findById(donorId).orElse(null);

        if (donor == null) {
            System.out.println("❌ Donor not found");
            return null;
        }

        System.out.println(" Donor Found: " + donor.getName());

      
        List<Patient> patients = patientRepo.findAll();

        System.out.println("TOTAL PATIENTS: " + patients.size());

        for (Patient p : patients) {
            System.out.println(p.getName() + " → " + p.getAiSeverityScore());
        }

        
        Patient selected = service.allocateOrgan(patients, donor);

        if (selected == null) {
            System.out.println("❌ No patient selected");
        } else {
            System.out.println(" Selected Patient: " + selected.getName());

            
            Allocation allocation = new Allocation();
            allocation.setPatientName(selected.getName());
            allocation.setDonorName(donor.getName());
            allocation.setOrgan(selected.getOrganNeeded());
            allocation.setSeverity(selected.getAiSeverityScore());

            allocationRepo.save(allocation);

            System.out.println("✅ Allocation saved to DB");
        }

        return selected;
    }
}