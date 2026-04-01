import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import DonorForm from "./components/DonorForm";
import PatientForm from "./components/PatientForm";
import Allocate from "./components/Allocate";
import ViewDonors from "./components/ViewDonors";
import ViewPatients from "./components/ViewPatients";
import ViewAllocations from "./components/ViewAllocations";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Donor Page */}
        <Route path="/donor" element={<DonorForm />} />

        {/* Patient Page */}
        <Route path="/patient" element={<PatientForm />} />

        {/* Allocation Page */}
        <Route path="/allocate" element={<Allocate />} />

        {/* View Pages */}
        <Route path="/view-donors" element={<ViewDonors />} />
        <Route path="/view-patients" element={<ViewPatients />} />

        {/* 🔥 NEW ROUTE */}
        <Route path="/view-allocations" element={<ViewAllocations />} />

      </Routes>
    </Router>
  );
}

export default App;
