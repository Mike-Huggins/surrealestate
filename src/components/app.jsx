import React from 'react';
import '../styles/app.css';
import NavBar from './navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

const App = () => <NavBar />;

export default App;
