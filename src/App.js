import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>

          <Header/>
          <HomeBody/>
      </div>
    );
  }
}

export default App;
