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
import Chatbot from "./components/Chatbot"; // ✅ ONLY ONCE

function App() {
  return (
    <Router>
      
      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<DonorForm />} />
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/allocate" element={<Allocate />} />
        <Route path="/view-donors" element={<ViewDonors />} />
        <Route path="/view-patients" element={<ViewPatients />} />
        <Route path="/view-allocations" element={<ViewAllocations />} />
      </Routes>

      {/* ✅ GLOBAL CHATBOT (VERY IMPORTANT) */}
      <Chatbot />

    </Router>
  );
}

export default App;