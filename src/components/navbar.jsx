import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="navBar">
    <nav className="navBarnav">
      <div className="textLogo">
        <a href="/"><FontAwesomeIcon icon="home" /></a>
        <span><a href="/">Surreal Estate</a></span>
        <ul className="nav">
          <Link to="/" className="item">View Properties</Link>
          <Link to="/addproperty" className="item">Add a Property</Link>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
