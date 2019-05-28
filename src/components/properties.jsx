import React from 'react';
import Propertycard from './propertycard';
import '../styles/properties.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import qs from 'qs';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      alert: '',
      error: false,
      search: '',
    };
  }

  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };

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

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div>
        <div className="sidenav">
          <form onSubmit={this.handleSearch}>
            <input placeholder="Search..." type="text" value={this.state.search} onChange={event => this.setState({ search: event.target.value })} />
            <button className="searchsubmit" type="submit" value="submit">Search</button>
          </form>
          <div className="filterTitle">Filter By Location:</div>
          <Link className="filterLink" to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
          <Link className="filterLink" to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
          <Link className="filterLink" to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
          <Link className="filterLink" to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
          <div className="filterTitle">Filter By Price:</div>
          <Link className="filterLink" to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
          <Link className="filterLink" to={this.buildQueryString('sort', { price: 1 })}>Price Ascending</Link>
        </div>
        <span className="error">{this.state.alert}</span>
        <div className="results">
          {this.state.properties.map(property => (
            <div key={property._id} className="col">
              <Propertycard key={property._id} {...property} />
            </div>
          ))}
        </div>
      </div>);
  }
}

export default Properties;
