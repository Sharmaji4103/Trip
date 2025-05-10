import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Holiday data by destination (no dates used or displayed)
const holidayData = {
  goa: [
    {
      name: "Goa Beach Escape",
      location: "Goa",
      duration: "5 Days / 4 Nights",
      price: "₹15,000",
    },
    {
      name: "Adventure in North Goa",
      location: "Goa",
      duration: "4 Days / 3 Nights",
      price: "₹12,000",
    },
  ],
  manali: [
    {
      name: "Manali Snow Retreat",
      location: "Manali",
      duration: "6 Days / 5 Nights",
      price: "₹18,000",
    },
    {
      name: "Romantic Manali Trip",
      location: "Manali",
      duration: "3 Days / 2 Nights",
      price: "₹9,500",
    },
  ],
  shimla: [
    {
      name: "Shimla Scenic Tour",
      location: "Shimla",
      duration: "4 Days / 3 Nights",
      price: "₹11,000",
    },
    {
      name: "Shimla Family Package",
      location: "Shimla",
      duration: "5 Days / 4 Nights",
      price: "₹14,500",
    },
  ],
};

function Holiday() {
  const [destination, setDestination] = useState("goa");
  const [date, setDate] = useState("");
  const [holidayResults, setHolidayResults] = useState(holidayData.goa);

  const handleSearch = (e) => {
    e.preventDefault();
    setHolidayResults(holidayData[destination]); // Ignore date
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h2 className="hotel-title">Book Your Holiday Package</h2>
        <p className="text-muted">Explore best travel packages across India.</p>
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
                <option value="goa">Goa</option>
                <option value="manali">Manali</option>
                <option value="shimla">Shimla</option>
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

          <button type="submit" className="btn btn-success w-100">
            Search Holidays
          </button>
        </form>
      </div>

      <div className="mb-4">
        <h4 className="mb-3 text-capitalize">
          Holiday Packages for {destination}
        </h4>
        <div className="row">
          {holidayResults.map((pkg, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{pkg.name}</h5>
                  <p className="card-text">Location: {pkg.location}</p>
                  <p className="card-text">Duration: {pkg.duration}</p>
                  <p className="card-text">Price: {pkg.price}</p>
                  <button className="btn btn-outline-success btn-sm">
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

export default Holiday;
