import React from "react";
import myimage from "../assets/images/mee.jpg";

const About = () => {
  return (
    <div id="aboutMe" className="about">
      <div className="about-heading">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <img className="my-image" src={myimage} alt="my_image" />
        <p className="about-me">
          Hi there! I'm Tushar, a self-taught web developer with a passion for
          creating useful product and services. Feel free to reach out and say
          hello.
        </p>
      </div>
    </div>
  );
};

export default About;
