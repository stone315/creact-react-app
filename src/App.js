import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import DataBlock from './DataBlock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand herf="/">STONE's Recipe</NavbarBrand>
        </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Recipe</h1>
        </header>
        <div>
          <DataBlock />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default App;
