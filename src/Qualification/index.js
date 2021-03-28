import React from "react";
import SmallHeading from "../components/Hero/UI/SmallHeading";
import MediumHeading from "../components/Hero/UI/MediumHeading";
import Tile from "../components/Hero/UI/Tile";
import { getImage } from "../utils/helpers";
import Button from "../components/Hero/UI/Button";
import "./style.css";

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <MediumHeading text="Qualification" />
      <SmallHeading text="My Education" />
      <div className="flexRow align-center justify-sb">
        <div data-aos="fade-up-right" className="qualificationImgContainer">
          <img src={getImage("chill.svg")} alt="Text" />
        </div>
        <div style={{
          background: "#fffff",
          padding:"5px 10px",
          boxSizing:"border-box",
          display:"flex",
          justifyContent:"center",
          borderRadius:"20px",

        }}>
        <div className="mlr-10">
            <Button label="Hire Me" />
          </div>
        <div className="mlr-10">
          <Button label="Download Resume" inverse={true} />
        </div>
        </div>
        <div data-aos="fade-up-left">
          <Tile
            title="KU University"
            mediumTitle="Computer Science & Engineering"
            desc="Fav subject Evs"
          />
          <Tile
            title="Gujarat Board"
            mediumTitle="10+2 science"
            desc="Fav Subject Computer"
          />
          <Tile
            title="Gujarat Board"
            mediumTitle="10th Comman"
            desc="Fav Subject Gujarati"
          />
        </div>
        </div>
        </div>

  );
};

export default Qualification;
