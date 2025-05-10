import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-4">
        {/* Header with logo and title */}
        <div className="d-flex align-items-center mb-4">
          <img
            src="/logo1.png"
            alt="Logo"
            style={{ width: "60px", height: "60px", marginRight: "15px" }}
          />
          <div className="flex-grow-1 d-flex justify-content-center">
            <h2 className="trip-headline">Make Your Trip Easy & Enjoyable</h2>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="row text-center">
          <div className="col-3">
            <div
              className="nav-icon"
              onClick={() => navigate("/flights")}
              style={{ cursor: "pointer" }}
            >
              <img src="/flight.png" alt="Flights" />
              <span>Flights</span>
            </div>
          </div>
          <div className="col-3">
            <div
              className="nav-icon"
              onClick={() => navigate("/hotels")}
              style={{ cursor: "pointer" }}
            >
              <img src="/hotel.png" alt="Hotels" />
              <span>Hotels</span>
            </div>
          </div>
          <div className="col-3">
            <div
              className="nav-icon"
              onClick={() => navigate("/trains")}
              style={{ cursor: "pointer" }}
            >
              <img src="/train.png" alt="Trains" />
              <span>Trains</span>
            </div>
          </div>
          <div className="col-3">
            <div
              className="nav-icon"
              onClick={() => navigate("/holidays")}
              style={{ cursor: "pointer" }}
            >
              <img src="/holiday.png" alt="Holiday" />
              <span>Holiday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div className="image-box text-center">
              <img
                src="/flight-img.jpg"
                alt="Flight"
                className="img-fluid"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="image-box text-center">
              <img
                src="/hotel-img.jpg"
                alt="Hotel"
                className="img-fluid"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="image-box text-center">
              <img
                src="/holiday-img.jpg"
                alt="Holiday"
                className="img-fluid"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Offers Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <div className="offer-box text-center p-5">
              <h4>Best Flight Deals</h4>
              <p>Get amazing flight offers tailored to your destination.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="offer-box text-center p-5">
              <h4>Hotel Discounts</h4>
              <p>Exclusive discounts on top-rated hotels worldwide.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="offer-box text-center p-5">
              <h4>Holiday Packages</h4>
              <p>Special offers on holiday packages for the best getaways.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div>
          <i className="bi bi-house-door"></i>
          <div>Home</div>
        </div>
        <div>
          <i className="bi bi-briefcase"></i>
          <div>My Trips</div>
        </div>
        <div>
          <i className="bi bi-tag"></i>
          <div>Offers</div>
        </div>
        <div>
          <i className="bi bi-geo-alt"></i>
          <div>Where2Go</div>
        </div>
        <div>
          <i className="bi bi-wallet2"></i>
          <div>Wallet</div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        body {
          background-color: #f8f9fa;
        }
        .trip-headline {
          font-weight: bold;
          font-size: 24px;
          color: #343a40;
        }
        .nav-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          border-radius: 15px;
          background-color: #fff;
          margin: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          height: 120px;
        }
        .nav-icon img {
          width: 50px;
          height: 50px;
        }
        .nav-icon span {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 600;
        }
        .bottom-nav {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: #fff;
          border-top: 1px solid #ddd;
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
        }
        .bottom-nav i {
          font-size: 18px;
        }
        .bottom-nav div {
          text-align: center;
        }
        .image-box {
          margin-bottom: 20px;
        }
        .offer-box {
          background-color: #f1f1f1;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          margin: 10px 0;
        }
        .offer-box h4 {
          font-size: 20px;
          color: #343a40;
        }
        .offer-box p {
          font-size: 16px;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
}

export default Home;
