import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FlightSearch() {
  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("BOM");
  const [date, setDate] = useState("");
  const [flightClass, setFlightClass] = useState("eco");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const flightData = [
    { from: "DEL", to: "BOM", airline: "IndiGo", time: "10:00 AM", price: "₹4,500" },
    { from: "DEL", to: "BLR", airline: "Air India", time: "12:00 PM", price: "₹5,200" },
    { from: "MAA", to: "BOM", airline: "Vistara", time: "6:00 AM", price: "₹4,800" },
    { from: "BLR", to: "DEL", airline: "SpiceJet", time: "3:30 PM", price: "₹4,000" },
    { from: "MAA", to: "BLR", airline: "AirAsia", time: "7:00 PM", price: "₹3,000" },
    { from: "BOM", to: "MAA", airline: "GoAir", time: "5:00 PM", price: "₹3,900" },
  ];

  const handleSearch = () => {
    if (!date) {
      setError("Please select a departure date.");
      setResults([]);
      return;
    }

    setError("");

    // Show all valid flights where from !== to
    const filtered = flightData.filter(flight => flight.from !== flight.to);
    setResults(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Search Flights</h2>

      <div className="mb-3">
        <label>From:</label>
        <select className="form-select" value={from} onChange={e => setFrom(e.target.value)}>
          <option value="DEL">Delhi</option>
          <option value="BOM">Mumbai</option>
          <option value="BLR">Bangalore</option>
          <option value="MAA">Chennai</option>
        </select>
      </div>

      <div className="mb-3">
        <label>To:</label>
        <select className="form-select" value={to} onChange={e => setTo(e.target.value)}>
          <option value="BOM">Mumbai</option>
          <option value="DEL">Delhi</option>
          <option value="BLR">Bangalore</option>
          <option value="MAA">Chennai</option>
        </select>
      </div>

      <div className="mb-3">
        <label>Departure Date:</label>
        <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="mb-3">
        <label>Class:</label>
        <select className="form-select" value={flightClass} onChange={e => setFlightClass(e.target.value)}>
          <option value="eco">Economy</option>
          <option value="premEco">Premium Economy</option>
        </select>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <button className="btn btn-primary w-100" onClick={handleSearch}>
        Show All Flights
      </button>

      <div className="mt-4">
        <h4>Available Flights:</h4>
        {results.length === 0 && !error ? (
          <p>No flights found.</p>
        ) : (
          results.map((flight, index) => (
            <div key={index} className="p-3 mb-2 bg-light border rounded">
              <strong>{flight.airline}</strong>
              <div>Time: {flight.time}</div>
              <div>Price: {flight.price}</div>
              <div>Class: {flightClass === "eco" ? "Economy" : "Premium Economy"}</div>
              <div>Date: {date}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FlightSearch;
