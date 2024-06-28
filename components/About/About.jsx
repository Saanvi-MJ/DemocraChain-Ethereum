import React from "react";

//INTERNAL IMPORT
import Banner from "./Banner";
import Client from "./Client";
import Company from "./Company";
import Mission from "./Mission";
import Team from "./Team";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <>
      <Banner />
      <Company />
      {/* <Client /> */}
      <Mission />
      <Team />
      {/* <Testimonial /> */}
    </>
  );
};

export default About;
