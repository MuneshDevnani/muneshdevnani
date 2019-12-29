import React, { Component } from 'react';
import imgfrontend from '../images/frontend.png'
import imgbackend from '../images/backend.jpg'
import imgfram from '../images/fram.png'
import imgoutros from '../images/outros.png'
import imgdatabase from '../images/database.jpg'

class Skills extends Component {
    
    render() { 
        return ( 
            <div className="maincontent container-fluid"> 
            <div>
                <h1 className="title">Skills
                    <hr/>
                </h1>
            </div>
            
                <div  className="bg-light row col-sm-12 col-md-12">
                <div className="col-md-3 col-sm-6" style={{display:'inline-block'}}>
            <img src={imgfrontend} className="circle" alt="myimg"/>
            </div>
            <div className="col-md-8 col-sm-6" style={{display:'inline-block'}}>
            <h4 style={{color:'red',fontweight: 'bold'}}>Front-end</h4>
              <h3 className="p2">
                 HTML5 , XHTML , CSS3 , Javascript , JSON , Responsive Design , Ajax
              </h3>
              </div>
              </div>
              

              <div className="row col-sm-12 col-md-12" style={{float:'right'}}>
            <div className="offset-md-6 col-md-4 col-sm-6" style={{display:'inline-block'}}>
            <h4 style={{color:'red',fontweight: 'bold'}}>Back-end</h4>
            <h3 className="p2">REST API , Java , C# , C , PHP</h3>
              </div>
              <div className="col-md-2 col-sm-6" style={{display:'inline-block'}}>
            <img src={imgbackend} className="circle" alt="myimg"/>
            </div>
              </div>
            

              <div className="wrapper" className="bg-light row col-sm-12 col-md-12">
                <div className="col-md-3 col-sm-6"  style={{display:'inline-block'}}>
            <img src={imgfram} className="circle" alt="myimg"/>
            </div>
            <div className="col-md-8 col-sm-6"  style={{display:'inline-block', marginLeft:'30px'}}>
            <h4 style={{color:'red',fontweight: 'bold'}}>Frameworks / Libs</h4>
              <h3 className="p2">
                Bootstrap , Jquery , Nodejs , Reactjs , Expressjs , Stripejs, Nodemailer
              </h3>
              </div>
              </div>

              <div className="row col-sm-12 col-md-12" style={{float:'right'}}>
            <div className="offset-md-6 col-md-4 col-sm-6" style={{display:'inline-block'}}>
            <h4 style={{color:'red',fontweight: 'bold'}}>Outros</h4>
            <h3 className="p2">Git, Github, Heroku, Windows, Netlify, WordPress, Chrome Developer Tools</h3>
              </div>
              <div className="col-md-2 col-sm-6" style={{display:'inline-block'}}>
            <img src={imgoutros} className="circle" alt="myimg"/>
            </div>
              </div>

              <div className="wrapper" className="bg-light row col-sm-12 col-md-12">
                <div className="col-md-3 col-sm-6"  style={{display:'inline-block'}}>
            <img src={imgdatabase} className="dbcircle" alt="myimg"/>
            </div>
            <div className="col-md-8 col-sm-6"  style={{display:'inline-block', marginLeft:'30px'}}>
            <h4 style={{color:'red',fontweight: 'bold'}}>Database</h4>
              <h3 className="p2">
                MongoDb , Oracle , SQL , Firebase
              </h3>
              </div>
              </div>
              
            <div className="clear"></div>
         
            </div>
         );
    }
}
 
export default Skills;