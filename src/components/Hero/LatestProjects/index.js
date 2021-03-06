import React from "react";
import Card from "../UI/Card";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import { getImage } from "../../../utils/helpers";
import "./style.css";
import Button from "../UI/Button";

function LatestProjects() {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginButtom: "50px" }}
    >
      <Card className="flexRow aling-center justify-sb">
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SmallHeading text="portfolios" />
          <MediumHeading text="latest Project" />
          <div className="mtb-10 flexRow" style={{justifyContent:"center"}}>
            <Button label="Portfolio" />
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={getImage("portfolio.jpg")} alt="Text" />
        </div>
      </Card>
    </div>
  );
}

export default LatestProjects;
