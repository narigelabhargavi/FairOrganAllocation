package com.organ.allocation.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.organ.allocation.model.Allocation;

public interface AllocationRepository extends JpaRepository<Allocation, Long> {
}
