import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("authenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials, try again.");
    }
  };

  return (
    <div style={{
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
        textAlign: "center"
      }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px" }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;