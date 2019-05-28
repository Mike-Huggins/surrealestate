import React, { Component } from 'react';
import '../styles/addproperty.scss';
import axios from 'axios';
import Alert from './Alert';

class AddProperty extends Component {
  state={
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: 'Manchester',
      email: '',
    },
    alertMessage: '',
    isSuccess: false,
    isError: false,
  };

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios.post('http://localhost:3000/api/v1/PropertyListing/', this.state.fields)
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields, [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form onSubmit={this.handleAddProperty}>
          <div><span className="title">Name of property</span><input name="title" placeholder="name of property" onChange={this.handleFieldChange} value={this.state.fields.title} required /></div>
          <div>
            <span className="title">Type of property</span>
            <select name="type" onChange={this.handleFieldChange} value={this.state.fields.type}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div><span className="title">Number of bedrooms</span><input type="number" name="bedrooms" placeholder="Number of bedrooms" onChange={this.handleFieldChange} value={this.state.fields.bedrooms} required /></div>
          <div><span className="title">Number of bathrooms</span><input type="number" name="bathrooms" placeholder="Number of bathrooms" onChange={this.handleFieldChange} value={this.state.fields.bathrooms} required /></div>
          <div><span className="title">Cost of house</span><input type="number" name="price" placeholder="Cost of house" onChange={this.handleFieldChange} value={this.state.fields.price} required /></div>
          <div>
            <span className="title">Location</span>
            <select name="city" onChange={this.handleFieldChange} value={this.state.fields.city}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div><span className="title">Email</span><input type="email" name="email" placeholder="email address" onChange={this.handleFieldChange} value={this.state.fields.email} required /></div>
          <span className="title">Submit property</span><button className="button" type="submit"> Add property </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
