function Login() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={{ marginTop: "10px", padding: "8px" }} /><br />
        <input type="password" placeholder="Password" style={{ marginTop: "10px", padding: "8px" }} /><br />
        <button style={{ marginTop: "10px", padding: "10px 20px" }}>Login</button>
      </div>
    );
  }
  
  export default Login;
  