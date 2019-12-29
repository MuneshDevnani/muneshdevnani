import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../App.css';
import SocialLinks from './SocialLinks';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
            <div className="maincontent container-fluid">
              <SocialLinks />
             <div>
                <h1 className="title">Let's talk!
                    <hr/>
                </h1>
            </div>

  <div className="banner">
    <div className="bg-color">
      <div className="container">
        <div className="row">
          <div className="banner-text text-center">
            <div className="intro-para text-center quote text-break ">
            <h2 className="thin">
              Need a <strong>freelancer</strong>?<br/>Is there a
              <strong> project</strong> that you would like to make it happen,
              and you are looking for a developer with
              <strong className="nowrap"> fullstack</strong> knowledge or a
              <strong className="nowrap"> frontend</strong> expert? <br/> I'm the
              right person,
              <strong className="nowrap"><AnchorLink href="#footer"> get in touch!</AnchorLink></strong><br/>
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
            </div>
            
         );
    }
}
 
export default Contact;