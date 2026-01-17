import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/studentLogin.css";
import useBlockchain from "../blockchain/useBlockchain";

const StudentLogin = () => {
  const navigate = useNavigate();

  const {
    account,
    connectWallet,
    registerStudent,
    checkStudentRegistered,
  } = useBlockchain();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [error, setError] = useState("");

  /* ================= LOGIN ================= */
  const handleLogin = async () => {
    if (!account) {
      setError("Please connect wallet first");
      return;
    }

    const isValid = await checkStudentRegistered(account);

    if (isValid) {
      navigate("/studentdash.html");
    } else {
      setError("Student not registered on blockchain");
    }
  };

  /* ================= REGISTER ================= */
  const handleRegister = async () => {
    if (!roll) {
      setError("Enter Roll Number");
      return;
    }

    await connectWallet();
    await registerStudent(roll);

    setError("");
    alert("Now you can login!");
  };

  return (
    <main className="student-login-page">
      <section className="login-card">

        <h2>Student Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Roll Number */}
        <input
          type="text"
          placeholder="University Roll Number"
          className="login-input"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        {/* Wallet */}
        <button className="wallet-btn" onClick={connectWallet}>
          {account ? "Wallet Connected" : "Connect Wallet"}
        </button>

        {account && (
          <p className="wallet-address">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        )}

        {/* Buttons */}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        {error && <p className="error-text">{error}</p>}

      </section>
    </main>
  );
};

export default StudentLogin;
