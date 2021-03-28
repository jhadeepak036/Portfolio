import React from "react";
import { getImage } from "../../utils/helpers";
import "./style.css";

function Footer() {
  return (
    <div className="container">
      <div className="flexRow justify-sb align-center">
        <div style={{ margin: "50px 0" }}></div>
        <div data-aos="zoom-out-right" className="footerMenus">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolios</a>
            <a href="#">Blog</a>
            <a href="#">Cantact</a>
          </nav>
        </div>
        <div  data-aos="zoom-out-up" className="conversationContainer primaryBgColor">
          <img src={getImage("talk.svg")} alt="Text" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
