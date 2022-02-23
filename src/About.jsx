import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Know Me"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
