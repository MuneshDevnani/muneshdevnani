import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
         <Navbar/>
    <section  id="home" >
			<Home/>
      </section>
      <section id='about'>
			<About/>
      </section>
      <section id='skills'>
			<Skills/>
      </section>
      <section id='projects'>
			<Projects/>
      </section>
      <section id="contact">
			<Contact/>
      </section>
      <section id="footer">
      <Footer/>
      </section>
          	</div>
    );
  }
}

export default App;