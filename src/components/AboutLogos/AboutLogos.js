import React from "react";
import "./AboutLogos.css";

class AboutLogos extends React.Component {
  render() {
    return (
      <div className="mx-auto center">
        <img
          src="./images/javascript.svg"
          alt="Javascript"
          className="aboutIconImg"
        />
        <img
          src="./images/jquery.png"
          alt="jQuery"
          className="aboutIconImg"
        />
        <img
          src="./images/node-logo.png"
          alt="Node"
          className="aboutIconImg"
        />
        <img
          src="./images/mysql-logo.png"
          alt="mySQL"
          className="aboutIconImg marginSpacingTwo"
        />
        <img
          src="./images/mongo-logo.png"
          alt="mongoDB"
          className="aboutIconImg"
        />
        <img
          src="./images/react-logo.svg"
          alt="React"
          className="aboutIconImg aboutReactLogo"
        />
      </div>
    );
  }
}

export default AboutLogos;
