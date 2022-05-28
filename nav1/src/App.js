import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Politics from './pages/Politics'
import Business from './pages/Business'
import Health from './pages/Health'
import Entertainment from './pages/Entertainment'
import JoinUs from './pages/JoinUs'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Politics />} />
          <Route path="business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/joinUs" element={<JoinUs />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
