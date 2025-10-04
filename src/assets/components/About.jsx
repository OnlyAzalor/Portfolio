
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false    // false = animate every time you scroll up/down
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="300" id='about1'> 
        <div className='about-head'><h1>About Me</h1>
        </div>
        <div className='about-container'>
        <div className='about-cont'><h2 className='about-logo'>Khalid Mohsen</h2></div>
        <div className='about-text'>
      <h2>Crafting Digital Experiences</h2>
      <p>I'm a passionate web developer specializing in creating cutting-edge digital experiences that merge art with technology.
         My work focuses on building interfaces that push the boundaries of web design.</p>
         
      <p className='secondary-text'>While I don’t have professional experience yet, I’ve been actively learning and practicing front-end development, with a particular focus on React and creating interactive web applications.
I’m motivated, eager to grow, and ready to contribute to real projects. I understand that as someone just starting out, I may compromise on salary, but what I truly value is the opportunity to learn, gain experience, and prove my skills.</p>
      </div>
    </div>
    </div>

  );
};

export default About;
