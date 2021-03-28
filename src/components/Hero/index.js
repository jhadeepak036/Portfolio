import React from "react";
import { getImage } from "../../utils/helpers";
import Button from "./UI/Button";
import "./style.css";
function Hero() {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Deepak Jha
          </p>
          <h1 className="testColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">
            Quick-learner, Innovator, Fire-fighter…
          </p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div style={{ marginLeft: "4%" }}>
              <Button label="Download Resume" inverse={true} />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="headerImgContainer">
            <img src={getImage("chill.svg")} alt="Text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
