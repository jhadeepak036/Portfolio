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
          data-aos="fade-up"
          data-aos-duration="3000"
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SmallHeading text="portfolios" />
          <MediumHeading text="latest Project" />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolio" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="projectImgContainer"
        >
          <img src={getImage("portfolio.jpg")} alt="Text" />
        </div>
      </Card>
    </div>
  );
}

export default LatestProjects;
