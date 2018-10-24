import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as myFetch from './myFetch';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.props = { counter: myFetch};
  }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.props.title}</h1>
        </header>
      </div>
    );
  }
}

export default App;
