import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("⚠️ This contact form is a demo and does not send data.");
  };

  return (
    <div className='contact-section'>
      <h1 className="section-title">Contact Me</h1>
      <form className="contact-form glass-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="neural-btn">SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default Contact;
