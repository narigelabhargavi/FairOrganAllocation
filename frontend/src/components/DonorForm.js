import React, { useState } from "react";
import axios from "axios";

function DonorForm() {
  const [donor, setDonor] = useState({
    name: "",
    bloodGroup: "",
    organType: ""
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      await axios.post("http://localhost:8080/donors", donor);

      // 🔥 Show success popup
      alert("Donor Added Successfully");

      // 🔥 CLEAR FORM (important fix)
      setDonor({
        name: "",
        bloodGroup: "",
        organType: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error while adding donor");
    }
  };

  return (
    <div>
      <div className="page-header">Add Donor</div>

      <div className="page-container">
        <div className="form-card">

          <input
            name="name"
            placeholder="Name"
            value={donor.name}
            onChange={handleChange}
          />

          <input
            name="bloodGroup"
            placeholder="Blood Group"
            value={donor.bloodGroup}
            onChange={handleChange}
          />

          <input
            name="organType"
            placeholder="Organ Type"
            value={donor.organType}
            onChange={handleChange}
          />

          <button onClick={submit}>Submit</button>

        </div>
      </div>
    </div>
  );
}

export default DonorForm;
