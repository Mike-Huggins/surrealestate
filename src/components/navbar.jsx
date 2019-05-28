import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const NavBar = (props) => (
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
      <span className="facebook">
        {props.userId ? (<button onClick={props.logOut}>Logout</button>) :
          (<FacebookLogin
            appId="456980761773767"
            autoLoad
            fields="default"
            callback={props.onLogin}
          />
          )
      }
      </span>
    </nav>
  </header>
);

export default NavBar;
