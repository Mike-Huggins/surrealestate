import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <div className="textLogo">
      <FontAwesomeIcon icon="home" /><span>Surreal Estate</span>
      <ul className="nav">
        <Link to="/" className="item">View Properites</Link>
        <Link to="/addproperty" className="item">Add a Property</Link>
      </ul>
    </div>
  </div>
);

export default NavBar;
