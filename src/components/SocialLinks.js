import React, { Component } from 'react';

class SocialLinks extends Component {
    render() { 
        return ( 
                <div className=" container">
                <h1 className="title">
            Social Links
            <hr/>
          </h1>
          <div className="container bg-light">
          <div className=" col-lg-12 col-md-6">
          <div className="text-center ">
          <ul className="list-unstyled list-inline" style={{marginLeft:'70px'}}>
            <li className="list-inline-item " >
              <a className="btn-floating btn-sm rgba-white-slight mx-1" 
              href="https://www.facebook.com/munesh.k.dewnani" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-facebook-f fa-10x" style={{color:'#3b5998'}}/>
              </a>
            </li>
            <li className="list-inline-item pl-6" style={{marginRight: '100px',marginLeft:'100px'}}>
              <a className="btn-floating btn-sm rgba-white-slight mx-1" 
              href="https://twitter.com/munesdevnani" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter fa-10x" style={{color:'#1da1f2'}}/>
              </a>
            </li>
            <li className="list-inline-item" style={{marginRight: '100px'}}>
              <a className="btn-floating btn-sm rgba-white-slight mx-1" 
              href="https://github.com/MuneshDevnani" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github fa-10x" style={{color:'#211f1f'}}/>
              </a>
            </li>
            <li className="list-inline-item" style={{marginRight: '100px'}}>
              <a className="btn-floating btn-sm rgba-white-slight mx-1" 
              href="https://www.linkedin.com/in/munesh-devnani-666512184/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin-in fa-10x" style={{color:'#0077B5'}} />
              </a>
            </li>
          </ul>
        </div>
        </div>
            </div>
            </div>
         );
    }
}
 
export default SocialLinks;