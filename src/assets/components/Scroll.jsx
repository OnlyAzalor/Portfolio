// ExampleComponent.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for animations

const ExampleComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

  return (
    <section style={{ paddingTop: '100vh' }}>
      <div className="card" data-aos="fade-up" data-aos-delay="0">Card 1</div>
      <div className="card" data-aos="fade-up" data-aos-delay="150">Card 2</div>
      <div className="card" data-aos="fade-up" data-aos-delay="300">Card 3</div>
      <div className="card" data-aos="fade-up" data-aos-delay="450">Card 4</div>
    </section>
  );
};

export default ExampleComponent;
