import React, { useState, useEffect, useRef} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./LoginForm.css";
import useAuth from "../hooks/useAuth";
// import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
 const { setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle('persist', false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(LOGIN_URL,
          JSON.stringify({ email, pwd}),
             {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
             }
          );
          // console.log(JSON.stringify(response?.data));
          // console.log(JSON.stringify(response));
          const accessToken = response?.data?.accessToken;
          setAuth({ email, accessToken });
          setEmail('');
          // resetUser();
          setPwd('');
          navigate(from, {replace: true});
    } catch (err){
        if(!err?.response){
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400){
          setErrMsg(' Missing Username or Password');
        } else if (err.response?.status === 401){
          setErrMsg('Invalid email or password');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }
  };
  
  return (
    <div className="login-auth-form-container">
      <section>
      <form className="login-form" onSubmit={handleSubmit}>

        <p className="p-errlog" ref={errRef}> {errMsg}</p>
        <h2 className="h2-login"> Login </h2>
        <label>Email </label>
        <input
          type="email"
          placeholder= "example@email.com "
          id="email"
          name="email"
          ref={userRef}
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Password </label>
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder= "password "
          id="password"
          name="password"
          required
        />

        <button>Log In </button>
        <div className="persistCheck">
          <input 
              type="checkbox"
              id="persist"
              onChange={toggleCheck}
              checked={check}
          />
          <label htmlFor="persist">Trust this device</label>
        </div>
        <p className="p-login">
            Don't have an account?
            <Link className="reg-link" to="/register">
                Register
            </Link>
        </p>
      </form>
      </section>
    </div>
  );
};

export default Login;
