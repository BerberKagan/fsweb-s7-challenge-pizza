import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import FormPage from "./components/FormPage"
import ApprovalPage from "./components/ApprovalPage"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<FormPage />} />
        <Route path="/approval" element={<ApprovalPage />} />
      </Routes>
    </div>
  );
};

export default App;
