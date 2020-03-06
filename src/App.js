import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import userService from './utils/userService';
import projectService from './utils/projectService';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Nav/Navigation';

import Home from './pages/Home/Home';
import MyProjects from './pages/MyProjects/MyProjects';

class App extends Component {
  state = {
    user: userService.getUser(),
    show: false,
    projects: []
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  // handleShowModal = () => {
  //   this.setState({ show: true })
  // }
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  handleLogout = () => {
    userService.logout();
    // Set user prop on state to null
    this.setState({ user: null, projects: [] });
    // this.props.history.push('/');

  }
  handleGetProjects = async () => {
    if(userService.getUser()) {
      const {projects} = await projectService.index();
      this.setState({projects});
    }
  }
  componentDidMount() {
    this.handleGetProjects();
  }
  render() {
    return (
      <div className="App-outer">
        <Navigation 
        {...this.props} 
        handleLogout={this.handleLogout}
        handleClose={this.handleClose}
        handleSignUpOrLogin={this.handleSignUpOrLogin} />
        <div className="App-inner">
          <Switch>
            <Route exact path="/" render={props =>
              <Home 
              {...props} 
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              // handleShowModal={this.handleShowModal} 
              handleSignUpOrLogin={this.handleSignUpOrLogin} />} />

              <Route exact path="/myprojects" render={props => 
              <MyProjects 
              {...props}
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              handleShowModal={this.handleShowModal}
              projects={this.state.projects}
              handleGetProjects={this.handleGetProjects} />
              } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
