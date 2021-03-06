import React from "react";
import Hero from "./components/Hero";
import LatestProjects from "./components/Hero/LatestProjects";
import Specializing from "./Specializing";
import MediumHeading from "./components/Hero/UI/MediumHeading";
import SmallHeading from "./components/Hero/UI/SmallHeading";
import Expertise from "./Expertise";
import Qualification from "./Qualification";
import Card from "./components/Hero/UI/Card";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Hero />
      <Card />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <MediumHeading />
      <SmallHeading />
      <Qualification />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
