import React, {Component} from 'react';
import '../styles/addproperty.scss';

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
  };

  handleAddProperty = event => {
    event.preventDefault();
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
        <form onSubmit={this.handleAddProperty}>
          <div><input name="title" placeholder="name of property" onChange={this.handleFieldChange} value={this.state.fields.title} required /></div>
          <div>
            <select name="type" onChange={this.handleFieldChange} value={this.state.fields.type} >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div><input type="number" name="bedrooms" placeholder="Number of bedrooms" onChange={this.handleFieldChange} value={this.state.fields.bedrooms} required /></div>
          <div><input type="number" name="bathrooms" placeholder="Number of bathrooms" onChange={this.handleFieldChange} value={this.state.fields.bathrooms} required /></div>
          <div><input type="number" name="price" placeholder="Cost of house" onChange={this.handleFieldChange} value={this.state.fields.price} required /></div>
          <div>
            <select name="type" onChange={this.handleFieldChange} value={this.state.fields.city}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div><input type="email" name="email" placeholder="email address" onChange={this.handleFieldChange} value={this.state.fields.email} required /></div>
          <button type="submit"> Add Form </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
