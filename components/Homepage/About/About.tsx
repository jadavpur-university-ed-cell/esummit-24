import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import "./About.css";

const About: FunctionComponent = () => {
  return (
    <div className="main-layout">
      <footer className="main-layout-child" />
      <div className="about-us-wrapper">
        <h1 className="about-us">About us</h1>
      </div>
      <FrameComponent />
    </div>
  );
};

export default About;