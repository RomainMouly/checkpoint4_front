import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/projectPage.css";

import axios from "axios";

const ProjectPage = ({ match }) => {
  const [Project, setProject] = useState({});
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data[0]));
  }, [id]);

  console.log(Project);

  return (
    <div className="overlay">
      <div className="contenu">
        <p>{Project.name}</p>{" "}
        <div className="project-client">
          <p>Notre client :</p> <p>{Project.client}</p>{" "}
        </div>
        <div className="project-description">
          <p> Description :</p> <p>{Project.description}</p>{" "}
        </div>
        <div className="project-technology">
          <p> Les technologies utilisées:</p> <p>{Project.technology}</p>{" "}
        </div>
        <div className="project-linktosite">
          <a
            href={Project.link}
            className="project-linkto"
            target="blank"
            rel="noopener noreferer"
          >
            Cliquez ici pour voir le site !
          </a>
        </div>
        <div className="project-contact">
          <Link className="project-linkto" to={"/contact"}>
            {" "}
            Cliquez ici pour échanger avec moi !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
