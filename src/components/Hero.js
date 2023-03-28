import React from "react";
import "./HeroStyles.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img
        alt="heroImg"
        src={props.heroImg}
        />

      <div className="hero-text">
        <h1> {props.title}</h1>
        <p> {props.subtitle}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
    </div>
  );
};

export default Hero;
