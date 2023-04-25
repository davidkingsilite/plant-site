import React, { useState, useEffect, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  
  return (
    <div className="login-auth-form-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="h2-login"> Login </h2>
        <label>Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder= " email@gmail.com "
          id="email"
          name="email"
        />
        <label>Password </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder= " ********* "
          id="password"
          name="password"
        />
        <button>Log In </button>
        <p className="p-login">
            Don't have an account?
            <Link className="reg-link" to="/register">
                Register
            </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
