import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking/123"); // Dummy trip ID
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Available Trips</h2>
      <div style={{ marginTop: "20px" }}>
        <p>Flight: Delhi ➜ Mumbai - ₹5,000</p>
        <button onClick={handleBook} style={{ marginTop: "10px", padding: "8px 16px" }}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Search;
