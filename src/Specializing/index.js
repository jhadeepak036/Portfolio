import React from "react";
import Card from "../components/Hero/UI/Card";
import MediumHeading from "../components/Hero/UI/MediumHeading";
import SmallHeading from "../components/Hero/UI/SmallHeading";
import "./style.css";
import { colors } from "../Style";
import Skill from "../components/Hero/UI/Skill";
const Specializing = (props) => {
  const skills = [
    {
      skillName: "C/C++/Node.js/Express.js/React",
      desc: "Programming language",
      value: "60",
      textColor: colors.primaryColor,
      pathColor: "#e40017",
    },
    {
      skillName: "MongoDB",
      desc: "Database",
      value: "60",
      textColor: colors.primaryColor,
      pathColor: "#222831",
    },
    {
      skillName: "HTML/CSS",
      desc: "Web Technologies",
      value: "70",
      textColor: colors.primaryColor,
      pathColor: "#335d2d",
    },
    {
      skillName: "Router/Switches/LAN,WAN,MAN",
      desc: "Networks",
      value: "50",
      textColor: colors.primaryColor,
      pathColor: "#f1e189",
    },
    {
      skillName: "Firewalls/IPS/VPN",
      desc: "Security Technologies   	",
      value: "40",
      textColor: colors.primaryColor,
      pathColor: "#433520",
    },
    {
      skillName: "Windows/Linux",
      desc: "Operating Systems	 ",
      value: "80",
      textColor: colors.primaryColor,
      pathColor: "#f14668",
    },
    {
      skillName: "MS Office/Internet/Social media handle",
      desc: "Other packages	",
      value: "90",
      textColor: colors.primaryColor,
      pathColor: "#00917c",
    },
  ];
  return (
    <div className="Container">
      <Card style={{ padding: "20px" }}>
        <div data-aos="zoom-in">
        <SmallHeading text="What I Do" />
        <MediumHeading text="Specializing in" />
        </div>
        <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{ padding: "30px" }}>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Specializing;
