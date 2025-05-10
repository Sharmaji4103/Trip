import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Railway data for different routes (date will be ignored)
const railwayData = {
  delhi: [
    {
      name: "Rajdhani Express",
      source: "New Delhi",
      destination: "Mumbai",
      time: "10:30 AM",
    },
    {
      name: "Shatabdi Express",
      source: "New Delhi",
      destination: "Bangalore",
      time: "7:00 AM",
    },
    {
      name: "Duronto Express",
      source: "New Delhi",
      destination: "Chennai",
      time: "9:00 PM",
    },
  ],
  goa: [
    {
      name: "Goa Express",
      source: "Goa",
      destination: "Mumbai",
      time: "5:30 AM",
    },
    {
      name: "Konkan Kanya Express",
      source: "Goa",
      destination: "Pune",
      time: "8:30 PM",
    },
    {
      name: "Margaon Express",
      source: "Goa",
      destination: "Bangalore",
      time: "2:00 PM",
    },
  ],
  mumbai: [
    {
      name: "Mumbai Local",
      source: "Mumbai",
      destination: "Pune",
      time: "6:00 AM",
    },
    {
      name: "Deccan Express",
      source: "Mumbai",
      destination: "Hyderabad",
      time: "9:30 AM",
    },
    {
      name: "CST Express",
      source: "Mumbai",
      destination: "Goa",
      time: "5:00 PM",
    },
  ],
};

function Railway() {
  const [destination, setDestination] = useState("delhi");
  const [date, setDate] = useState("");
  const [trainResults, setTrainResults] = useState(railwayData.delhi); // Default results

  const handleSearch = (e) => {
    e.preventDefault();
    setTrainResults(railwayData[destination]); // No date filtering
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2 className="hotel-title">Book Your Railway Ticket</h2>
        <p className="text-muted">Find the best deals on train tickets worldwide.</p>
      </div>

      <div className="card p-4 mb-4 shadow-sm">
        <form onSubmit={handleSearch}>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Destination</label>
              <select
                className="form-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="delhi">New Delhi</option>
                <option value="goa">Goa</option>
                <option value="mumbai">Mumbai</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Travel Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Search Trains
          </button>
        </form>
      </div>

      <div className="mb-4">
        <h4 className="mb-3 text-capitalize">
          Trains to {destination === "delhi" ? "New Delhi" : destination}
        </h4>
        <div className="row">
          {trainResults.map((train, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{train.name}</h5>
                  <p className="card-text">
                    {train.source} to {train.destination}
                  </p>
                  <p className="card-text">
                    Departure Time: {train.time}
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hotel-title {
          font-size: 28px;
          font-weight: 600;
          color: #343a40;
        }
        .card-title {
          font-size: 18px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default Railway;
