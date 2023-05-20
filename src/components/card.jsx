import React from "react";
import Avatar from "./avatar";
import Detail from "./detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <Avatar img={props.img} />
      </div>
      <div className="middle">
        <h2 className="name">{props.title}</h2>
        <Detail
          detailinfo={<p className="description">{props.description}</p>}
        />
      </div>
      <div className="bottom">
        <Detail
          detailinfo={
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="project__icon"
              />
            </a>
          }
        />
        <Detail
          detailinfo={
            <a href={props.live} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
                className="project__icon"
              />
            </a>
          }
        />
      </div>
    </div>
  );
};

export default Card;
