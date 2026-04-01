package com.organ.allocation.service;

import com.organ.allocation.model.Patient;
import com.organ.allocation.model.Donor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Comparator;

@Service
public class AllocationService {

    // 🔹 Check blood compatibility
    public boolean isCompatible(String pBG, String dBG) {
        return pBG.equals(dBG);
    }

    public Patient allocateOrgan(List<Patient> patients, Donor donor) {

        return patients.stream()

                // ✅ Step 1: Blood match
                .filter(p -> isCompatible(p.getBloodGroup(), donor.getBloodGroup()))

                // ✅ Step 2: Organ match
                .filter(p -> p.getOrganNeeded().equalsIgnoreCase(donor.getOrganType()))

                // ✅ Step 3 & 4: Sort
                .max(
                    Comparator
                        .comparingDouble(Patient::getAiSeverityScore)   // highest severity
                        .thenComparingInt(Patient::getWaitingDays)      // highest waiting
                )

                .orElse(null);
    }
}