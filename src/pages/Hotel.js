import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Hotel data for different destinations
const hotelData = {
  delhi: [
    {
      name: "The Grand Palace",
      location: "New Delhi, India",
      image: "/hotel1.jpg", // Image stored in the public folder
    },
    {
      name: "Hotel Royal Inn",
      location: "New Delhi, India",
      image: "/hotel2.jpg", // Image stored in the public folder
    },
    {
      name: "Sunset View Hotel",
      location: "New Delhi, India",
      image: "/hotel3.jpg", // Image stored in the public folder
    },
  ],
  goa: [
    {
      name: "Ocean View Resort",
      location: "Goa, India",
      image: "/hotel4.jpg", // Image stored in the public folder
    },
    {
      name: "Beach Paradise Stay",
      location: "Goa, India",
      image: "/hotel5.jpg", // Image stored in the public folder
    },
    {
      name: "Coconut Tree Inn",
      location: "Goa, India",
      image: "/hotel6.jpg", // Image stored in the public folder
    },
  ],
  mumbai: [
    {
      name: "City Light Inn",
      location: "Mumbai, India",
      image: "/hotel7.jpg", // Image stored in the public folder
    },
    {
      name: "Urban Nest Hotel",
      location: "Mumbai, India",
      image: "/hotel8.jpg", // Image stored in the public folder
    },
    {
      name: "Harbor Bay Resort",
      location: "Mumbai, India",
      image: "/hotel9.jpg", // Image stored in the public folder
    },
  ],
};

function Hotels() {
  const [destination, setDestination] = useState("delhi");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [results, setResults] = useState(hotelData.delhi); // Default search for New Delhi

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setResults(hotelData[destination]); // Update results based on selected destination
  };

  return (
    <div className="container mt-4">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="hotel-title">Book Your Hotel Stay</h2>
        <p className="text-muted">Find the best deals on top hotels worldwide.</p>
      </div>

      {/* Hotel Search Form */}
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
              <label className="form-label">Check-In</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Check-Out</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Guests</label>
              <input
                type="number"
                className="form-control"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Rooms</label>
              <input
                type="number"
                className="form-control"
                min="1"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Search Hotels
          </button>
        </form>
      </div>

      {/* Hotel Results Section */}
      <div className="mb-4">
        <h4 className="mb-3 text-capitalize">
          Hotels in {destination === "delhi" ? "New Delhi" : destination}
        </h4>
        <div className="row">
          {results.map((hotel, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <img
                  src={hotel.image}
                  className="card-img-top"
                  alt={hotel.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">{hotel.location}</p>
                  <button className="btn btn-outline-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        .hotel-title {
          font-size: 28px;
          font-weight: 600;
          color: #343a40;
        }
        .card img {
          height: 200px;
          object-fit: cover;
        }
        .card-title {
          font-size: 18px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

export default Hotels;
