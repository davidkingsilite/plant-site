import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

   return (
   <header className="navbar">
    <h3 className="title">Radius Plants</h3>
     <div className="links">
      <div className="linksctn">
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : null)} >Home</NavLink>
    <NavLink to="/catalogue" className={({isActive}) => (isActive ? "active" : null)} >Catalogue</NavLink>
    <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : null)} >Contact</NavLink>
      </div>
    <NavLink to="/search/id" className={({isActive}) => (isActive ? "active" : null)}>Search</NavLink>
    <NavLink to="/" className={({isActive}) => (isActive ? "active" : null)}>Cart(0)</NavLink>
    </div>
   </header>
   
);
};
export default Navbar;

