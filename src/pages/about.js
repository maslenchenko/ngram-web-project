import React from "react";
import "../styles/about.css";
import DropDown from "../components/drop-down.js";
import {
  heading1,
  heading2,
  heading3,
  heading4,
  text1,
  text2,
  text3,
  text4,
} from "../components/about-strings.js";

function About() {
  return (
    <div className="about-main">
      <h1 className="about-heading">TEXT PREDICTION BASED ON N-GRAM MODEL</h1>
      <div className="about-drops">
        <DropDown heading={heading1} text={text1} />
        <DropDown heading={heading2} text={text2} />
        <DropDown heading={heading3} text={text3} />
        <DropDown heading={heading4} text={text4} />
      </div>
    </div>
  );
}

export default About;
