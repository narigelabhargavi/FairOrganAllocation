import React, { useState } from "react";
import axios from "axios";

function Allocate() {
  const [donorId, setDonorId] = useState("");
  const [result, setResult] = useState(null);

  const allocate = () => {
    axios.get(`http://localhost:8080/allocate/${donorId}`)
      .then((res) => {

        // 🔥 CASE 1: No patient found
        if (!res.data) {
          alert("No suitable patient found for this donor");
          setResult(null);
        } 
        // 🔥 CASE 2: Patient found
        else {
          alert(`Organ allocated to: ${res.data.name}`);
          setResult(res.data);
        }

      })
      .catch((err) => {
        console.error(err);
        alert("Error during allocation");
      });
  };

  return (
    <div>
      <div className="page-header">Organ Allocation</div>

      <div className="page-container">
        <div className="form-card">

          <input
            placeholder="Enter Donor ID"
            value={donorId}
            onChange={(e) => setDonorId(e.target.value)}
          />

          <button onClick={allocate}>Allocate</button>

          {/* 🔥 SHOW RESULT */}
          {result && (
            <div style={{ marginTop: "15px" }}>
              <h3>Selected Patient:</h3>
              <p>Name: {result.name}</p>
              <p>Blood: {result.bloodGroup}</p>
              <p>Organ: {result.organNeeded}</p>
              <p>Severity: {result.aiSeverityScore?.toFixed(2)}</p>
              <p>Waiting Days: {result.waitingDays}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Allocate;
