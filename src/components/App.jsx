import React from "react";
import Card from "./card";
import projects from "../projects";
import Skill from "./skill";
import skills from "../skills";
import About from "./about";
import "../styles/App.css";
import Contact from "./contact";

function createCard(project) {
  return (
    <div className="card-container">
      <Card
        key={project.id}
        title={project.title}
        img={project.imgURL}
        description={project.description}
        github={project.github}
        live={project.live}
      />
    </div>
  );
}

function SkillItem(skills) {
  return <Skill logo={skills.logo} title={skills.title} />;
}

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <About />
        <div id="projects" className="container">
          <div className="heading">
            <h1>Projects</h1>
          </div>
          <div className="cards-row">{projects.map(createCard)}</div>
        </div>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <SkillItem key={index} title={skill.title} logo={skill.logo} />
            ))}
          </div>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default App;
