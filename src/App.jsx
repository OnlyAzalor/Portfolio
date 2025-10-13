import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Background />
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
    </>
  )
}

export default App
