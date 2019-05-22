import React from 'react';

const Propertycard = props => (
  <div className="propertyCard">
    <div className="title">{props.title}</div>
    <div className="type">{props.type}</div>
    <div className="bedrooms">{props.bedrooms}</div>
    <div className="bathrooms">{props.bathrooms}</div>
    <div className="price">{props.price}</div>
    <div className="city">{props.city}</div>
    <div className="email">
      <a href={`"mailto:"${props.email}`} target="_top">Email</a>
    </div>
  </div>
);
export default Propertycard;
