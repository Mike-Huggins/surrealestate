import React from 'react';
import Propertycard from './propertycard';

const Properties = () => (
  <div>
      Properties Page
    <Propertycard
      title="Flat"
      type="1 Bed Flat"
      bedrooms="1"
      bathrooms="1"
      price="1"
      city="Manchester"
      email="test@mcr.com"
    />
  </div>
);

export default Properties;
