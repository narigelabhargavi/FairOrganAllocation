package com.organ.allocation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.organ.allocation.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
}