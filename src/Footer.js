import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="social-container">
      <footer
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </footer>
      <footer
        href="https://www.twitter.com/jamesqquick"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </footer>
      <footer
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </footer>
      <p>© Copyright 2020 Iris Arke</p>
    </div>
  );
};

export default Footer;
