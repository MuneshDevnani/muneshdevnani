import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="maincontent container-fluid">
                  <Router>
               {/* Footer */}
<footer className="page-footer font-small mdb-color pt-4 bg-dark text-light">
  {/* Footer Links */}
  <div className="container text-center text-md-left ">
    {/* Footer links */}
    <div className="row text-center text-md-left mt-3 pb-3">
      {/* Grid column */}
      <div className="col-md-5 col-lg-5 col-xl-7 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Get in touch</h6>
        <p>If you wanna get in touch, talk to me about a project collaboration or just say hi,
fill up the form below or send an email to 
muneshdevnani@gmail.com
 and ~let's talk.</p>
 <div class="row">
     <input type="text" className="col-md-5 col-lg-5 form-control" placeholder="Enter Your Name"/>
     <input type="email" className="col-md-5 col-lg-5 form-control" placeholder="Enter Your Email Address"/>
     </div>
     <div class="row">
     <textarea  className="col-md-10 col-lg-10 form-control" placeholder="Your Message Here"/>
     </div>
     <div class="row">
     <button type="submit" class="btn btn-success">Send</button>
      </div>
      </div>

      <hr className="w-100 clearfix d-md-none" />
      {/* Grid column */}
      <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mt-4">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fas fa-home mr-3" /> Sadar, Karachi.</p>
        <p>
          <i className="fas fa-envelope mr-3" /> muneshdevnani@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3" /> + 92 308 3316462</p>
      </div>
      {/* Grid column */}
    </div>
    {/* Footer links */}
    <hr />
    {/* Grid row */}
    <div className="row d-flex align-items-center">
      {/* Grid column */}
      <div className="col-md-7 col-lg-8">
        {/*Copyright*/}
        <p className="text-center text-md-left">© 2019 Copyright:
          <Link to="/">
            <strong> MuneshDevnani.com</strong>
          </Link>
        </p>
      </div>
      {/* Grid column */}
      {/* Grid column */}
      
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
</footer>
{/* Footer */}
       </Router>
            </div>
         );
    }
}
 
export default Footer;