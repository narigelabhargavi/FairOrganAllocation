package com.organ.allocation.model;

import jakarta.persistence.*;

@Entity
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String bloodGroup;
    private String organType;

    public String getName() {
        return name;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getOrganType() {
        return organType;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public void setOrganType(String organType) {
        this.organType = organType;
    }
}