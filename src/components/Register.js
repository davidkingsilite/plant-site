import React, { useState, useEffect} from "react";
import "./RegisterForm.css";
import FormInput from "./FormInput";



const Register = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 
    const inputs = [
      {
        id:1,
        name:"username",
        type: "text",
        placeholder:"Username",
        errorMessage:"(only 3-16 characters, no special characters!)",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
        {
        id:2,
        name:"email",
        type: "email",
        placeholder:"Email",
        errorMessage:"Please enter valid email address!",
        label: "Email",
        pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
        required: true,
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
        pattern: /*"^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,20}$",*/'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[a-zA-Z0-9!@#%&]{8,20}$',
        required: true,
        autoComplete: "off",
      },
        {
        id:5,
        name:"confirmPassword",
        type: "password",
        placeholder:"Confirm Password",
        errorMessage:"Passwords don't match!",
        label: "Confirm Password", 
        pattern: ((values.confirmPassword === values.password) ? values.password :""),
        required: true,
        autoComplete: "off",
      }
    ]

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
    setValues(" ");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  const validate =()=> {
      const errors = {};
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

      const regexPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%&])[a-zA-Z0-9!@#%&]{8,20}$/i;
      if (!values.username){
          errors.username = "Username is required";
      }
      if (!values.email){
          errors.email = "Email is required";
      }else if(!regex.test(values.email)){
          errors.email = "this is not a valid email format";
      }
      if (!values.password){
          errors.password = "Password is required"
      }else if(!regexPassword.test(values.password)){
          errors.password = "Password not in the valid format";
      }
      if (values.confirmPassword !== values.password){
        errors.confirmPassword = "password dont match!";
      }
      return errors;
  };


  const onChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }
    console.log(values);

  return (
    <div className="reg-auth-form-container">
       {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        <> </>
      )}
      <form onSubmit={handleSubmit} >
        <h1>Join Travel Experience</h1>
        { inputs.map((input) =>(
          <FormInput
             key={input.id} 
             {...input} 
             values={input.name} 
             onChange={onChange} 
             {...formErrors}
          />
        ))}
        <p>{formErrors.confirmPassword}</p>
        <button className="reg-btn"> Join </button>

        <button onClick={() => props.onFormSwitch("login")}>
        {" "}
        Already have an account? Login
      </button>
      </form>
    </div>
  );
};

export default Register;


