import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'



export default class Home extends Component {
    render() {
  return (
    <div className="App">
        <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, you're looking at a Raspberry Pi served webpage
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}