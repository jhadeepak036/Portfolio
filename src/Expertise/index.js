import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { colors } from "../Style";
import Card from "../components/Hero/UI/Card";
import MediumHeading from "../components/Hero/UI/MediumHeading";
import SmallHeading from "../components/Hero/UI/SmallHeading";
import SocialConnect from "../components/Hero/UI/SocialConnect";
import { getImage } from "../utils/helpers";
import "./style.css";

const percentage = 60;
const Expertise = (props) => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div data-aos="fade-down" className="expertizeImgContainer">
        <img src={getImage("chill.svg")} alt="Text" />
      </div>
      <div data-aos="fade-right">
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card style={{ padding: "30px", width: "320px", margin: "100px auto" }}>
        <div className="flexRow align-center">
          <div data-aos="fade-left" style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="textColor mlr-10">Development</h2>
        </div>
        <p data-aos="fade-left" className="grey font-12">
          Highly recognized in the community, I can meet the challenges that
          your company will entrust me. I am a recognized expert in
          technologist.
        </p>
      </Card>
      <SocialConnect />
    </div>
  );
};

export default Expertise;
