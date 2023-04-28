import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">CRUD App</h3>
     </div>
     <div className="NavBar-Links">
      {/* <Link to="/home" className="NavBar-Link">Home</Link> */}
      <Link to="/add" className="NavBar-Link">Add Customer</Link>
     </div>
   </nav>
  );
};

export default Home;
