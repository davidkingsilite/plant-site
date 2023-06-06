import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RegisterForm.css";
import FormInput from "./FormInput";
import axios from "../api/axios";


const REGISTER_URL = '/register';

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [errMsg, setErrMsg] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
 
    const inputs = [
      {
        id:1,
        name:"username",
        type: "text",
        errorMessage:"(only 3-16 characters, underscore and no special characters!)",
        label: "Username",
        pattern: "^[A-Za-z][A-Za-z0-9-_]{3,16}$",
        required: true
      },
        {
        id:2,
        name:"email",
        type: "email",
        errorMessage:"Please enter valid email address!",
        label: "Email",
        pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
        required: true
      },
        {
        id:3,
        name:"birthday",
        type: "date",
        label: "Birthday"
      },
        {
        id:4,
        name: "password",
        type: "password",
        errorMessage:"Should be 8-20 characters and include at least 1 letter, 1 number and 1 special character except (*^$)",
        label: "Password",
        pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[a-zA-Z0-9!@#%&]{8,20}$',
        required: true 
      },
        {
        id:5,
        name:"confirmPassword",
        type: "password",
        errorMessage:"Passwords don't match!",
        label: "Confirm Password", 
        pattern: ((values.confirmPassword === values.password) ? values.password :""),
        required: true
      }
    ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(REGISTER_URL,
          JSON.stringify({ user: values.username, email: values.email, pwd: values.password }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
          );
          // console.log(response);
          // console.log(response?.data);
          // console.log(response?.accessToken);
          // console.log(JSON.stringify(response));
          setIsSubmit(true);
      //clear the input fields 
           setValues('');
    } catch (err){
        if(!err?.response){
            setErrMsg('No server Response. ');
        } else if(err.response?.status === 409){
            setErrMsg('Username already taken. ');
                  
        } else if(err.response?.status === 406){
            setErrMsg('Email already existed. Please sign-in.');
           
        } else { 
          setErrMsg('Registration Failed');

        }
        return;
    }
   
  }

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }
    // console.log(values);

  return (
    <div className="reg-auth-form-container">
      <>
       { isSubmit ? (
        <div className="reg-suc"><p>Registration successful. <Link to='/login' className="link-login">Log in with your details to sign-in.</Link></p>
        </div>

      ) : (
        <section> 
         <form onSubmit={handleSubmit} >  
          <p className="reg-ptag">{errMsg}</p>
          <h1 className="reg-h1">Join Travel Experience</h1>
        { inputs.map((input) =>(
          <FormInput
             key={input.id} 
             {...input} 
             values={input.name} 
             onChange={onChange} 
          />
        ))}

        <button className="reg-btn"> Join </button>
        <p className="p-reg">
            Already have an account?
            <Link className="log-link" to="/login">
                Log in
            </Link>
        </p>
      </form>
      </section>
      )}
     </>
      
    </div>
  );
};

export default Register;




