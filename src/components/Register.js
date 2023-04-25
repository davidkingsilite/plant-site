import React, { useState, useEffect } from "react";
import "./RegisterForm.css";
import FormInput from "./FormInput";
import axios from "../api/axios";


const REGISTER_URL = '/register';

const Register = (props) => {
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
        placeholder:"Username",
        errorMessage:"(only 3-16 characters, underscore and no special characters!)",
        label: "Username",
        pattern: "^[A-Za-z][A-Za-z0-9-_]{3,16}$",
        required: true
      },
        {
        id:2,
        name:"email",
        type: "email",
        placeholder:"Email",
        errorMessage:"Please enter valid email address!",
        label: "Email",
        pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
        required: true
      },
        {
        id:3,
        name:"birthday",
        type: "date",
        placeholder:"Birthday",
        label: "Birthday"
      },
        {
        id:4,
        name: "password",
        type: "password",
        placeholder:"Password",
        errorMessage:"Should be 8-20 characters and include at least 1 letter, 1 number and 1 special character except (*^$)",
        label: "Password",
        pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[a-zA-Z0-9!@#%&]{8,20}$',
        required: true 
      },
        {
        id:5,
        name:"confirmPassword",
        type: "password",
        placeholder:"Confirm Password",
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
          JSON.stringify({ user: values.username, pwd: values.password, email: values.email}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
          );
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response));
          setIsSubmit(true);
      //clear the input fields 
           setValues('');
    } catch (err){
        if(!err?.response){
            setErrMsg(' No server Response');
        } else if(err.response.username?.status === 409){
            setErrMsg(' Username taken');
        } else if(err.response.email?.status === 409){
            setErrMsg(' Email already Existed. Sign In.');
        } else { setErrMsg('Registration Failed') }
        return;
    }
   
  }

  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }
    console.log(values);

  return (
    <div className="reg-auth-form-container">
      <>
       { isSubmit ? (
        <div>Signed in successfully</div>

      ) : (
        <section>
          <p>{errMsg}</p>
         <form onSubmit={handleSubmit} >  
          <h1>Join Travel Experience</h1>
        { inputs.map((input) =>(
          <FormInput
             key={input.id} 
             {...input} 
             values={input.name} 
             onChange={onChange} 
             
          />
        ))}

        <button className="reg-btn"> Join </button>
        <button onClick={() => props.onFormSwitch("login")}>
        {" "}
        Already have an account? Login
      </button>
      </form>
      </section>
      )}
     </>
      
    </div>
  );
};

export default Register;


