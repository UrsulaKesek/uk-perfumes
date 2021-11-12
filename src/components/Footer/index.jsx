import React from "react";
import "./Footer.css";
import Behance from "./Images/Behance.png";
import Deviant from "./Images/Deviantart.png";
import Dribbble from "./Images/Dribbble.png";
import Facebook from "./Images/Facebook.png";
import Github from "./Images/Github.png";
import Reddit from "./Images/Reddit.png";
import Snapchat from "./Images/Snapchat.png";
import Twitter from "./Images/Twitter.png";

const Footer = () => (
  <footer className="footer">
    <p>Ursula Kesek made this website in Hackney in July 2020 and revised it in September 2020.</p>
    <div className="sm"> 
    <a
      href="https://www.behance.net/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={Behance} alt="behance-logo" />
    </a>
    <a
      href="https://www.deviantart.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={Deviant} alt="deviantart-logo" />
    </a>
    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
      <img className="icon" src={Dribbble} alt="dribbble-logo" />
    </a>
    <a
      href="https://en-gb.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={Facebook} alt="facebook-logo" />
    </a>
    <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
      <img className="icon" src={Github} alt="github-logo" />
    </a>
    <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
      <img className="icon" src={Reddit} alt="reddit-logo" />
    </a>
    <a
      href="https://www.snapchat.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={Snapchat} alt="snapchat-logo" />
    </a>
    <a
      href="https://twitter.com/search-home?lang=en-gb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="icon" src={Twitter} alt="twitter-logo" />
    </a>
    </div>
  </footer>
);
export default Footer;
