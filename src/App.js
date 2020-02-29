import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav/Nav';

import Home from './pages/Home/Home';

class App extends Component {
  state = {
    user: userService.getUser(),
    show: false
  }
  handleClose = () => {
    this.setState({show: false})
  }
  handleShowModal = () => {
    this.setState({show: true})
  }
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  handleLogout = () => {
    // Call userService.logout();
    userService.logout();
    // Set user prop on state to null
    this.setState({ user: null })

  }
  render() {
    return (
      <div className="App-outer">
        <Nav />
        <div className="App-inner">
          <Switch>
            <Route exact path="/" render={props => 
            <Home {...props} isShowing={this.state.show} handleClose={this.handleClose} handleShowModal={this.handleShowModal} handleSignUpOrLogin={this.handleSignUpOrLogin} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
