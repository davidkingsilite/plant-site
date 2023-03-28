import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact =()=> {
  return(
    <>
       <Navbar />
       <Hero 
      cName="hero-mid"
      heroImg ="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80"
      title="Contact"
      btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;