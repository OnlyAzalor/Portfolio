// ExampleComponent.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for animations
import "./Project.css"; // Assuming you have some CSS for styling

const ExampleComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <h1 className="project-header" data-aos="fade-up">
        Full Stack Projects
      </h1>
      <div className="project-row1">
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="150"
          href="/External-Links/Glass-Site/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (93).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
      </div>
      <h1 className="project-header" data-aos="fade-up">
        Projects
      </h1>
      <div className="project-row1">
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="150"
          href="/External-Links/Glass-Site/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (93).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="150"
          href="/External-Links/Health-Center/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (94).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="150"
          href="/External-Links/Profile-Temp/Index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (97).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="150"
          href="/External-Links/Weather-app/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (101).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
      </div>
      <div className="project-row2">
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="250"
          href="/External-Links/Glass/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (92).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="250"
          href="/External-Links/Simple-Calculator/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (99).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="250"
          href="/External-Links/Lucky-7/Index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (95).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="250"
          href="/External-Links/Wack-Mole/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (100).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
      </div>
      <h1 className="project-header" data-aos="fade-up">
        Non-Responsive
      </h1>
      <div className="project-row3">
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="350"
          href="/External-Links/Flappy-Bird/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (91).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="350"
          href="/External-Links/Pac-Man/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (96).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="350"
          href="/External-Links/Doodle-Jump/index.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (90).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
        <a
          className="card"
          data-aos="fade-up"
          data-aos-delay="350"
          href="/External-Links/Candy-Crush/candy.html"
          target="_blank"
        >
          <img
            src="/External-Links/Thumbnails/Screenshot (89).png"
            alt=""
            className="Project-Thumb"
          />
        </a>
      </div>
    </div>
  );
};

export default ExampleComponent;
