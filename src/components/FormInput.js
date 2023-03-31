import React,{useState} from "react";
import "./FormInput.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);

    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) =>{
        setFocused(true);
    };

    return(
        <div className="forminput">
           <label className="lab-ctn"> {label} </label>
            <input 
                autoComplete="on"
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus}
                onFocus ={() => 
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
                <span className="invalid-icn">
                    {errorMessage}
                    <i className="fa-solid fa-circle-exclamation"></i>
                </span>   
                <span className="success-icn">
                    <i className="fa-solid fa-circle-check"></i>
                </span>
                
        </div>
    );
}

export default FormInput;