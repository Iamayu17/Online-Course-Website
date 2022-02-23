import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow it "
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
};
export default Home;
