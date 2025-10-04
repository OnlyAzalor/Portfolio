import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div id='footer' className='footer'>
        <div className='footer-section'>
            <h3 className='footer-head'>Navigation</h3>
            <ul className='footer-nav'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div>
                <h3 className='footer-head'>Connect</h3>
                <p className='footer-text'>Let's build something together.</p>
                <div className='social-icons'>
                <p className='footer-text'><a href="https://www.linkedin.com/in/khalid-mohsen-91a46b17a/" target='_blank'>✉️ : LinkedIn</a></p>
                <p className='footer-text'><a href="https://wa.me/201206229868" target='_blank'>📞 : 01206229868</a></p>
                </div>
                
        </div>


        </div>
            <div className='Copy-right'>
            <p>&copy; 2025 Khalid Mohsen. All rights reserved.</p>
            </div>
    </>
  )
}

export default Footer