import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewAllocations() {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allocations")
      .then((res) => setAllocations(res.data))
      .catch(() => alert("Error fetching allocations"));
  }, []);

  return (
    <div>
      <div className="page-header">Allocation History</div>

      <div className="data-container">
        <div className="data-header">
          <span>ID</span>
          <span>Patient</span>
          <span>Donor</span>
          <span>Organ</span>
          <span>Severity</span>
        </div>

        {allocations.map((a, index) => (
          <div className="data-row" key={index}>
            <span>{a.id}</span>
            <span>{a.patientName}</span>
            <span>{a.donorName}</span>
            <span>{a.organ}</span>
            <span>{a.severity?.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllocations;
