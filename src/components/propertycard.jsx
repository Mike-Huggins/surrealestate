import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPoundSign, faBed, faBath, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faPoundSign, faBed, faBath, faEnvelope);


const Propertycard = props => (
  <div className="propertyCard">
    <div className="Propertycardimage"><FontAwesomeIcon icon="home" /><span className="head">{props.title} - {props.city}</span></div>
    <div className="type">{props.type}</div>
    <div className="bedrooms"><FontAwesomeIcon id="bedIcon" icon="bed" />{props.bedrooms}</div>
    <div className="bathrooms"><FontAwesomeIcon id="bathIcon" icon="bath" />{props.bathrooms}</div>
    <div className="price"><FontAwesomeIcon id="poundIcon"icon="pound-sign" />{props.price}</div>
    <div className="email">
      <a href={`"mailto:"${props.email}`} target="_top"><FontAwesomeIcon icon="envelope" />Email</a>
    </div>
  </div>
);

export default Propertycard;
