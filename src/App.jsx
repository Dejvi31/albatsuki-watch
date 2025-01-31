import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import CardDetails from "./components/details/CardDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
