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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    };
  }

  handleLogin = (response) => {
    this.setState({ userId: response.userID });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userId: null });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onLogin={this.handleLogin}
          userId={this.state.userId}
          logOut={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/addproperty" component={AddProperty} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
