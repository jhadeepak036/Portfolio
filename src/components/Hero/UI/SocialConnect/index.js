/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { getSocialIcon } from "../../../../utils/helpers";
import "./style.css"
function SocialConnect() {
  return (
    <div className="socialConnect">
      <samp className="textcolor font-12">Follow me on: </samp>
      <a className="socialLink" href="#">
        <img
          src={getSocialIcon("facebook.svg")}
          alt="facebook"
        />
      </a>
      <a className="socialLink" href="#">
          <img
        src={getSocialIcon("linkedin.svg")}
        alt="linkedin"
        />
      </a>
      <a className="socialLink" href="#">
          <img
        src={getSocialIcon("instagram.svg")}
        alt="instagram"
        />
      </a>
    </div>
  );
}

export default SocialConnect;
