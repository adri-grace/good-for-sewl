import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav/Nav';

import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App-outer">
        <Nav />
        <div className="App-inner">
          <Switch>
            <Route exact path="/" render={props => <Home />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
