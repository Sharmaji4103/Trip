import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FlightSearch() {
  const [from, setFrom] = useState("DEL");
  const [to, setTo] = useState("BOM");
  const [date, setDate] = useState("");
  const [flightClass, setFlightClass] = useState("eco");
  const [results, setResults] = useState([]);

  const flightData = [
    { from: "DEL", to: "BOM", airline: "IndiGo", time: "10:00 AM", price: "₹4,500" },
    { from: "DEL", to: "BOM", airline: "Air India", time: "2:30 PM", price: "₹5,000" },
    { from: "BLR", to: "MAA", airline: "SpiceJet", time: "6:00 AM", price: "₹3,000" },
  ];

  const handleSearch = () => {
    const filtered = flightData.filter(flight => flight.from === from && flight.to === to);
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

      <button className="btn btn-primary w-100" onClick={handleSearch}>
        Search Flights
      </button>

      <div className="mt-4">
        <h4>Available Flights:</h4>
        {results.length === 0 ? (
          <p>No flights found for this route.</p>
        ) : (
          results.map((flight, index) => (
            <div key={index} className="p-3 mb-2 bg-light border rounded">
              <strong>{flight.airline}</strong>
              <div>Time: {flight.time}</div>
              <div>Price: {flight.price}</div>
              <div>Class: {flightClass === "eco" ? "Economy" : "Premium Economy"}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FlightSearch;
