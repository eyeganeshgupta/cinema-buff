import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menu-items">
          <li className="menu-item">Terms Of Use</li>
          <li className="menu-item">Privacy-Policy</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">FAQ</li>
        </ul>
        <div className="info-text">
          Lights, camera, browse! Join us at CinemaBuff for an immersive movie
          experience. Your one-stop destination for all your film cravings.
        </div>
        <div className="social-icons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
