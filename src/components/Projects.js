import React, { Component } from 'react'
import navttcimg from './../images/navttc.png'
import beachroom from './../images/beachroom.png'
import shopnow from './../images/shopnow.png'
import colorgame from './../images/colorgame.png'
import exercise from './../images/exercise.png'
import ebook from './../images/ebook.png'
import renton from './../images/renton.png'
import color from './../images/color.png'
import chatapp from './../images/chatapp.png'

export default class Projects extends Component {
    render() {
        return (
        <div className="maincontent"> 
             <div>
                <h1 className="title">Portfolio
                <hr/>
                </h1>
             </div>
             <div class="container">
<div className="col-lg-4 col-md-6 mb-4 offset" style={{ display: 'inline-block'}}>
             <div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={shopnow} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Open Shop</h5>
    <p className="card-text">It is a ecommerce site using Nodejs Expressjs Reactjs and MongoDb Atlas.</p>
    <a href="#" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/OpenShop" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={beachroom} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Beach Resort</h5>
    <p className="card-text">Beach Resort is just like hotel resort using Reactjs and Contentful API. </p>
    <a href="https://hotel-beach.netlify.com/" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/beachresort" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={navttcimg} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">NAVTTC Page</h5>
    <p className="card-text">NAVTTC template designed using HTML CSS and Bootstrap. </p>
    <a href="https://navttcpage.netlify.com/" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/NAVTTCPage" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={renton} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">RentOn</h5>
    <p className="card-text">RentOn Website an online marketplace to rent anything, developed using MERN Stack it was My Final Year Project. </p>
    <a href="#" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/RentOn" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={colorgame} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Color Game</h5>
    <p className="card-text">A simple Color Game using plane javascript just to remmember the rgb combination of colors.</p>
    <a href="https://javascriptcolorgame.netlify.com/" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/colorgame" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>


<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={ebook} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Ebook Seller</h5>
    <p className="card-text">Ebook seller is a web development book selling site using Nodejs Expressjs and Stripejs.</p>
    <a href="https://calm-dawn-46184.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/ebook" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div>   

<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={exercise} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Exercise Traker</h5>
    <p className="card-text">Exercise Traker is Simple demonstration of CRUD operations using Nodejs Expressjs Reactjs and MongoDb Atlas.</p>
    <a href="#" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="#" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div> 
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={chatapp} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Chat App</h5>
    <p className="card-text">Simple Chat app using HTML CSS and javascript storing messages locally, And performing CRUD operations.</p>
    <a href="#" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/chatapp" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div> 
<div className="col-lg-4 col-md-6 mb-4" style={{ display: 'inline-block'}}>
<div className="card" style={{width: '22rem'}}>
  <img className="card-img-top" src={color} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Colors With Sound</h5>
    <p className="card-text">With every keystroke it shows color rings and plays diffrent sounds. made using HTML CSS Javascript PaperJs and HowlerJs.</p>
    <a href="https://muneshdevnani.github.io/colors/" rel="noopener noreferrer" target="_blank" className="btn btn-success">Visit site</a>
    <a href="https://github.com/MuneshDevnani/colors" rel="noopener noreferrer" target="_blank" className="btn btn-secondary float-right">Go To Github Repo</a>
  </div>
</div>
</div> 

        </div>
        </div>
        )
    }
}
