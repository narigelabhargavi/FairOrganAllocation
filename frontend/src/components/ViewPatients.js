import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/patients")
      .then((res) => setPatients(res.data))
      .catch(() => alert("Error fetching patients"));
  }, []);

  return (
  <div>
    <div className="page-header">Patient List</div>

    <div className="data-container">
      <div className="data-header">
        <span>ID</span>
        <span>Name</span>
        <span>Blood</span>
        <span>Organ</span>
        <span>Severity</span>
      </div>

      {patients.map((p, index) => (
        <div className="data-row" key={index}>
          <span>{p.id}</span>
          <span>{p.name}</span>
          <span>{p.bloodGroup}</span>
          <span>{p.organNeeded}</span>
          <span>{p.aiSeverityScore?.toFixed(2)}</span>
        </div>
      ))}
    </div>
  </div>
);
}

export default ViewPatients;
