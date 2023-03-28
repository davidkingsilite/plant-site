import React, { useState } from "react";
import "./LoginForm.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="login-auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email@gmail.com"
          id="email"
          name="email"
        />
        <label>Password </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button>Log In </button>
      </form>
      <button onClick={() => props.onFormSwitch("Register")}>
        {" "}
        Don't have an account? Register
      </button>
    </div>
  );
};

export default Login;
