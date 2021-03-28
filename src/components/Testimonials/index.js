import React from "react";
import { getImage } from "../../utils/helpers";
import Card from "../Hero/UI/Card";
import MediumHeading from "../Hero/UI/MediumHeading";
import SmallHeading from "../Hero/UI/SmallHeading";
import "./style.css";
function Testimonials() {
  return (
    <div className="container">
      <div data-aos="flip-left">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="what people say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div data-aos="flip-right" className="testimonialImgContainer">
          <img src={getImage("chill.svg")} alt="Right" />
        </div>
        <Card style={{ width: "500px", height: "300px", padding: "30px" }}>
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={getImage("man.svg")} alt="Logo" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16">Deepak M. Jha</p>
              <p className="textColor font-14 bold-600">Software Developer</p>
            </div>
          </div>
          <p className="mtb-10 grey">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
        </Card>
        <div data-aos="flip-right" className="testimonialImgContainer">
          <img src={getImage("chill.svg")} alt="Left" />
        </div>
      </div>
      <Card style={{ width: "500px", margin: "100px auto", padding: "20px" }}>
        <p data-aos="zoom-in" className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span className="primaryColor">Say Hello at</span>{" "}
        </p>
        <p data-aos="zoom-in-up" className="text-center font-25">jhadeepak036@gmail.com</p>
      </Card>
    </div>
  );
}

export default Testimonials;
