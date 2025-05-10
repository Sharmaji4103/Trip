import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Booking ID: {id}</h2>
      <p>Fill your details to confirm booking:</p>
      <input type="text" placeholder="Full Name" style={{ marginTop: "10px", padding: "8px" }} /><br />
      <input type="email" placeholder="Email" style={{ marginTop: "10px", padding: "8px" }} /><br />
      <button style={{ marginTop: "10px", padding: "10px 20px" }}>Confirm</button>
    </div>
  );
}

export default Booking;
