import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "darlamitushar1234@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  // Social media handel links for footer icons.
  const twitterProfileUrl = "https://twitter.com/tushardarlami";
  const instagramProfileUrl = "https://www.instagram.com/tushar_darlami_/";
  const githubProfileUrl = "https://github.com/nedTushar";

  return (
    <footer>
      <div id="contact" className="contact__form">
        <div className="contact__heading">Contact us</div>
        <div className="contact__details">
          <FontAwesomeIcon icon={faEnvelope} className="animated-email" />
          <p>Email: darlamitushar1234@gmail.com</p>
          <button className="contact__button" onClick={handleEmailClick}>
            Send Email
          </button>
        </div>

        {/* social media icons with links */}
        <div className="social__handle">
          <a
            href={twitterProfileUrl}
            className="social__link"
            target="_blank"
            rel="noopener noreferrer "
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              className="social__icon"
            />
          </a>
          <a
            href={instagramProfileUrl}
            className="social__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="social__icon"
            />
          </a>
          <a
            href={githubProfileUrl}
            className="social__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="social__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
