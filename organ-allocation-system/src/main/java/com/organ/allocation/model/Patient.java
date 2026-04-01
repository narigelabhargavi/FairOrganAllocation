package com.organ.allocation.model;

import jakarta.persistence.*;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String bloodGroup;
    private String organNeeded;
    private int waitingDays;

   
    private double aiSeverityScore;

    
    public String getBloodGroup() {
        return bloodGroup;
    }

    public int getWaitingDays() {
        return waitingDays;
    }

    public String getName() {
        return name;
    }

    public String getOrganNeeded() {
        return organNeeded;
    }

    public double getAiSeverityScore() {
        return aiSeverityScore;
    }

   
    public void setName(String name) {
        this.name = name;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public void setOrganNeeded(String organNeeded) {
        this.organNeeded = organNeeded;
    }

    public void setWaitingDays(int waitingDays) {
        this.waitingDays = waitingDays;
    }

    public void setAiSeverityScore(double aiSeverityScore) {
        this.aiSeverityScore = aiSeverityScore;
    }
}