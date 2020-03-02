import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Nav/Navigation';

import Home from './pages/Home/Home';
import MyProjects from './pages/MyProjects/MyProjects';

class App extends Component {
  state = {
    user: userService.getUser(),
    show: false
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleShowModal = () => {
    this.setState({ show: true })
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
        <Navigation handleLogout={this.handleLogout} />
        <div className="App-inner">
          <Switch>
            <Route exact path="/" render={props =>
              <Home 
              {...props} 
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              handleShowModal={this.handleShowModal} 
              handleSignUpOrLogin={this.handleSignUpOrLogin} />} />

              <Route exact path="/myprojects" render={props => 
              <MyProjects 
              {...props}
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              handleShowModal={this.handleShowModal} />
              } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
