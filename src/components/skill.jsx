import React from "react";

const Skill = (props) => {
  return (
    <div className="skills-item">
      <div className="logo-container">
        <img className="skill-logo" src={props.logo} alt="logo" />
      </div>
      <div className="title-container">
        <p className="skill-title">{props.title}</p>
      </div>
    </div>
  );
};

export default Skill;
