import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../App.css';
import logo from './../images/MD_logo.ico'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: 'blue'}} >
  <AnchorLink className="navbar-brand" href="#home"><img src={logo} style={{height: '50px'}} alt=""></img></AnchorLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active" style={{marginLeft: '30px'}}>
        <AnchorLink className="nav-link" href="#home">Home <span className="sr-only">(current)</span></AnchorLink>
      </li>
      <li className="nav-item" style={{marginLeft: '30px'}}>
        <AnchorLink className="nav-link" href="#about">About</AnchorLink>
      </li>
      <li className="nav-item" style={{marginLeft: '30px'}}>
        <AnchorLink className="nav-link" href="#skills">Skills</AnchorLink>
      </li>
      <li className="nav-item" style={{marginLeft: '30px'}}>
        <AnchorLink className="nav-link" href="#projects">Portfolio</AnchorLink>
      </li>
      <li className="nav-item" style={{marginLeft: '30px'}}>
        <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
      </li>
    </ul>
  </div>
</nav> 
</div>
         );
    }
}
 
export default Navbar;