import React, { Component } from 'react';
import '../App.css';
import myimg from '../images/mine.jpg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="maincontent container">
                <h1 className="title">
            About
            <hr/>
          </h1>
                <img className="mineimg" alt="Minepic" title="Munesh Devnani Full-stack" src={myimg}/><br/>
                <h2 className="font-weight-bold text-center">Munesh Devnani</h2>
                <p className="p2 text-center quote text-break">I am a Full stack Web Developer <br/>I enjoy turning complex problems into simple,
                 <br/>beautiful and intuitive designs. When I'm not<br/> coding, you'll find me Playing Cricket and Singing.</p><br/><br/>
            </div>
         );
    }
}
 
export default About;