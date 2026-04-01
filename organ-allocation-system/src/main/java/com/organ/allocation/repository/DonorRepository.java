package com.organ.allocation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.organ.allocation.model.Donor;

public interface DonorRepository extends JpaRepository<Donor, Long> {
}