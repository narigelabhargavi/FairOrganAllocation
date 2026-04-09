import React, { useState } from "react";
import axios from "axios";

function PatientForm() {
  const [patient, setPatient] = useState({
    name: "",
    bloodGroup: "",
    organNeeded: "",
    waitingDays: ""
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submit = async () => {

    if (!file) {
      alert("Please upload an image");
      return;
    }

    // 🔥 Step 1: Show calculating popup
    alert("AI is calculating severity...");

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("name", patient.name);
      formData.append("bloodGroup", patient.bloodGroup);
      formData.append("organNeeded", patient.organNeeded);
      formData.append("waitingDays", patient.waitingDays);

      const res = await axios.post(
        "https://fairorganallocation-4.onrender.com/patients/upload",
        formData
      );

      // 🔥 Step 2: Show severity result
      const severity = res.data.aiSeverityScore;
      alert(`Severity Calculated: ${severity.toFixed(2)}`);

      // 🔥 Step 3: CLEAR FORM (important fix)
      setPatient({
        name: "",
        bloodGroup: "",
        organNeeded: "",
        waitingDays: ""
      });

      setFile(null);

      // 🔥 Optional: clear file input visually
      document.querySelector('input[type="file"]').value = "";

    } catch (err) {
      console.error(err);
      alert("Error while processing");
    }
  };

  return (
    <div>
      <div className="page-header">Add Patient</div>

      <div className="page-container">
        <div className="form-card">

          <input
            name="name"
            placeholder="Name"
            value={patient.name}
            onChange={handleChange}
          />

          <input
            name="bloodGroup"
            placeholder="Blood Group"
            value={patient.bloodGroup}
            onChange={handleChange}
          />

          <input
            name="organNeeded"
            placeholder="Organ Needed"
            value={patient.organNeeded}
            onChange={handleChange}
          />

          <input
            name="waitingDays"
            placeholder="Waiting Days"
            value={patient.waitingDays}
            onChange={handleChange}
          />

          {/* 🔥 File Upload */}
          <input type="file" onChange={handleFileChange} />

          <button onClick={submit}>Submit</button>

        </div>
      </div>
    </div>
  );
}

export default PatientForm;
