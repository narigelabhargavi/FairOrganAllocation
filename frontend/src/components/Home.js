import React from "react";
import { useNavigate } from "react-router-dom";
import doctorImg from "../doctor2.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${doctorImg})` }}
      >
        <div className="hero-text">
          AI-Based Organ Allocation  
          Decision Support System
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">

        {/* Donor Card */}
        <div className="card">
          <h2>Donor</h2>
          <button onClick={() => navigate("/donor")}>
            Add Donor
          </button>
          <button onClick={() => navigate("/view-donors")}>
            View Donors
          </button>
        </div>

        {/* Patient Card */}
        <div className="card">
          <h2>Patient</h2>
          <button onClick={() => navigate("/patient")}>
            Add Patient
          </button>
          <button onClick={() => navigate("/view-patients")}>
            View Patients
          </button>
        </div>

        {/* Allocation Card */}
        <div className="card">
  <h2>Allocation</h2>

  <div className="button-row">
    <button onClick={() => navigate("/allocate")}>
      Allocate Organ
    </button>

    <button onClick={() => navigate("/view-allocations")}>
      View Allocations
    </button>
  </div>

</div>

      </div>
    </div>
  );
}

export default Home;
