import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
    projects: [],
    usersProjects: []
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleSignUpOrLogin = () => {
    this.setState({ user: userService.getUser() });
    this.props.history.push('/myprojects')
  }
  handleLogout = () => {
    userService.logout();
    // Set user prop on state to null
    this.setState({ user: null, projects: [] });
    this.handleGetProjects();
    this.props.history.push('/');

  }
  handleGetProjects = async () => {

      const {projects} = await projectService.index();
      this.setState({projects});

  }
  handleGetUsersProjects = async () => {
    if(userService.getUser()) {
      const {usersProjects} = await projectService.getUsersProjects();
      this.setState({usersProjects});
      this.props.history.push('/myprojects');
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
        handleSignUpOrLogin={this.handleSignUpOrLogin}
        handleGetUsersProjects={this.handleGetUsersProjects} />
        <div className="App-inner">
          <Switch>
            <Route exact path="/" render={props =>
              <Home 
              {...props} 
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              projects={this.state.projects}
              handleSignUpOrLogin={this.handleSignUpOrLogin}
              handleGetProjects={this.handleGetProjects} />} />

              <Route exact path="/myprojects" render={props => 
              <MyProjects 
              {...props}
              isShowing={this.state.show} 
              handleClose={this.handleClose} 
              usersProjects={this.state.usersProjects}
              handleGetUsersProjects={this.handleGetUsersProjects} />
              } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
