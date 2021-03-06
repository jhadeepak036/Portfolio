import React from "react";
import Hero from "./components/Hero";
import LatestProjects from "./components/Hero/LatestProjects";
import Specializing from "./components/Hero/Specializing";
import MediumHeading from "./components/Hero/UI/MediumHeading";
import SmallHeading from "./components/Hero/UI/SmallHeading";
import Expertise from "./Expertise";
import Qualification from "./Qualification";
import Testimonials from "./components/Testimonials";
import Card from "./components/Hero/UI/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero/>
      <Card/>
      <Specializing />
      <Expertise />
      <LatestProjects />
      <MediumHeading />
      <SmallHeading />
      <Qualification />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;
