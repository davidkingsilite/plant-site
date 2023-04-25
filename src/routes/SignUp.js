import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const SignUp = () => {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
};

export default SignUp;



