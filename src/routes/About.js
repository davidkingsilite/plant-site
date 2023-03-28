import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const About = () => {
  return(
    <>
    <Navbar />
     <Hero 
      cName="hero-mid"
      heroImg ="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="About"
      btnClass="hide"
      />
      < AboutUs />
      <Footer />
    </>
  );
}
export default About;