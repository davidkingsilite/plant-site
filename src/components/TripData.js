import React from "react";
import "./TripStyles.css";

const TripData = (props) => {
  return(
    <div className="tripData-card"> 
      <div className="tripData-image">
          <img alt="recent destination" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
       <p>{props.text}</p>
    </div>
  );
}

export default TripData;
