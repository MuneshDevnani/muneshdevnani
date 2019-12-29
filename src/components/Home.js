import React, { Component } from 'react';
import '../App.css';
import Particles from 'react-particles-js';

const particleOpt ={
  particles:{
    number:{
      value:150,
      density:{
        enable:true,
        value_area:800
      },
      move: {
        radius: 12
    }
    }
  }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className=" maincontent">
                
<div className="jumbotron jumbotron-fluid bgimage ">
  <div className="container text-light font-italic mt-5">
    <h1 className="display-3">Hi,</h1>
  <p className="p display-5">
  I'm <span className="nowrap display-4 font-weight-bold">Munesh Devnani,</span> <br/>a
              Fullstack Web Developer<br/><strong>Welcome!</strong>
  </p>

  </div>
  <Particles 
                params={particleOpt} />
</div>
            </div>
         );
    }
}
 
export default Home;