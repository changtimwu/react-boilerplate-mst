import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import MuiDemo from './MuiDemo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">YA! Welcome to React</h1>
        </header>
        <Router>
          <div>
            <ul className="menulist">
              <NavLink to="/muidemo">MaterialUI Demo</NavLink>
            </ul>
            <hr />
            <Route path="/muidemo" component={MuiDemo} />
          </div>
        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>


    );
  }
}

export default App;
