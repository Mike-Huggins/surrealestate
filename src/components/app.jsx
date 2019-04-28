import React from 'react';
import '../styles/app.css';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './addproperty';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route } from 'react-router-dom';


library.add(faHome);

const App = () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/addproperty" component={AddProperty} />
    </Switch>
  </React.Fragment>
);

export default App;
