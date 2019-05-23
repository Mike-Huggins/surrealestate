import React from 'react';
import Propertycard from './propertycard';
import '../styles/properties.scss';
import axios from 'axios';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      alert: '',
      error: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => this.setState({ properties: response.data }))
      .catch(() => {
        this.setState({
          alert: 'Oops something went wrong.',
          error: true,
        });
      });
  }

  render() {
    return (
      <div>
        <span className="error">{this.state.alert}</span>
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <Propertycard key={property._id} {...property} />
          </div>
        ))}
      </div>);
  }
}

export default Properties;
