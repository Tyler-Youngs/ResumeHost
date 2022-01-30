import logo from './Assets/logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'



export default class Home extends Component {
    render() {
  return (
    <div className="App">
        <header className="App-header">
        <h1>Welcome to Tyler and Frank's website!</h1>
        </header>
        <h2 className='App-Title'>The Project</h2>
        <p className='App-Content'>
          After winter, Frank and I wanted a project to upskill. After considering 
          several options, we decided on building a website to host our resumes. 
          This webpage is served by a Raspberry Pi. Currently it uses static content and 
          a react front end.
        </p>
    </div>
  );
}
}