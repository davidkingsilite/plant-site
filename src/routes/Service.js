import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Service = () => {
  return(
    <>
     <Navbar />
     <Hero 
      cName="hero-service"
      heroImg ="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      title="Service"
      btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
