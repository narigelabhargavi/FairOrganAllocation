import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get("https://fairorganallocation-4.onrender.com/donors")
      .then((res) => setDonors(res.data))
      .catch(() => alert("Error fetching donors"));
  }, []);

  return (
    <div>
      <div className="page-header">Donor List</div>

      <div className="data-container">
        <div className="data-header">
          <span>ID</span>
          <span>Name</span>
          <span>Blood</span>
          <span>Organ</span>
        </div>

        {donors.map((d, index) => (
          <div className="data-row" key={index}>
            <span>{d.id}</span>
            <span>{d.name}</span>
            <span>{d.bloodGroup}</span>
            <span>{d.organType}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewDonors;