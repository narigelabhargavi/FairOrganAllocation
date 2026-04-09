package com.organ.allocation.controller;

import com.organ.allocation.model.Patient;
import com.organ.allocation.repository.PatientRepository;
import com.organ.allocation.service.AIService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientRepository repo;

    @Autowired
    private AIService aiService;

    @PostMapping("/upload")
    public Patient addPatient(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("bloodGroup") String bloodGroup,
            @RequestParam("organNeeded") String organNeeded,
            @RequestParam("waitingDays") int waitingDays
    ) throws Exception {

        double severity = aiService.getSeverity(file);

        Patient p = new Patient();
        p.setName(name);
        p.setBloodGroup(bloodGroup);
        p.setOrganNeeded(organNeeded);
        p.setWaitingDays(waitingDays);
        p.setAiSeverityScore(severity);

        return repo.save(p);
    }

    @GetMapping
    public List<Patient> getAll() {
        return repo.findAll();
    }
}