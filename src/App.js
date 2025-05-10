import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import MyTrips from "./pages/MyTrips";
import Login from "./pages/Login";
import FlightSearch from "./pages/FlightSearch";
import Hotel from "./pages/Hotel";
import Trains from "./pages/Trains";
import Holidays from "./pages/Holidays"; // ✅ Import Holidays component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/mytrips" element={<MyTrips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flights" element={<FlightSearch />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/holidays" element={<Holidays />} /> {/* ✅ New route for holidays */}
      </Routes>
    </Router>
  );
}

export default App;
