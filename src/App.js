import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import MuiDemo from './MuiDemo'
import MuiSignIn from './MuiSignIn'
import './App.css'



const Home = () => (
  <div>
    <h2>Home</h2>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

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
              <NavLink to="/">Home</NavLink>
              <NavLink to="/muidemo">MaterialUI Widgets</NavLink>
              <NavLink to="/muisignin">Sign In</NavLink>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/muidemo" component={MuiDemo} />
            <Route path="/muisignin" component={MuiSignIn} />
          </div>
        </Router>

      </div>


    );
  }
}

export default App;
