import React from 'react'
import Nav from './assets/components/Nav'
import './assets/components/Nav.css'
import './App.css'
import Hero from './assets/components/Hero'
import './assets/components/Hero.css'
import About from './assets/components/About'
import Project from './assets/components/Project'
import './assets/components/Project.css'
import Skills from './assets/components/Skills'
import './assets/components/Skills.css'
import Contact from './assets/components/Contact'
import './assets/components/Contact.css'
import './assets/components/About.css'
import Footer from './assets/components/Footer'

function App() {
  return (
    <div>
      <Nav />
      <div className='content'>
          <div id='home'>
            <Hero />
          </div>
          <div id='about'>
            <About />
          </div>
          <div id='projects'>
            <Project />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
