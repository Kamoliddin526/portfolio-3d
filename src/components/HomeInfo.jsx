import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>{" "}
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} alt="noimg" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Kamoliddin</span>
      👋
      <br />A Frontend Developer from Angren.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many projects throughout my learning and picked many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Created many project while learning Web Development"
      link="/projects"
      btnText="Visit my portFolio"
    />
  ),
  4: (
    <InfoBox
      text="If you want me join your upcoming project or have any questions, you can contact me here 👇 "
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
