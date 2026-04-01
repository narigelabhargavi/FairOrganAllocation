package com.organ.allocation.model;


import jakarta.persistence.*;

@Entity
public class Allocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private String donorName;
    private String organ;
    private double severity;

    // GETTERS
    public Long getId() { return id; }
    public String getPatientName() { return patientName; }
    public String getDonorName() { return donorName; }
    public String getOrgan() { return organ; }
    public double getSeverity() { return severity; }

    // SETTERS
    public void setPatientName(String patientName) { this.patientName = patientName; }
    public void setDonorName(String donorName) { this.donorName = donorName; }
    public void setOrgan(String organ) { this.organ = organ; }
    public void setSeverity(double severity) { this.severity = severity; }
}
