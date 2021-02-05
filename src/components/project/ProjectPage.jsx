import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/projectPage.css";

import axios from "axios";

const ProjectPage = ({ match }) => {
  const [project, setProject] = useState({});
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data[0]));
  }, [id]);

  console.log(project);

  return (
    <div className="overlay-pp">
      <div className="project-block-pp">
        <h2>{project.name}</h2>
        <div className="blockImage-pp">
          <img
            src={project.picture}
            alt={project.name}
            className="project-picture-pp"
          />
        </div>

        <div className="blockText-pp">
          <h4>{project.date}</h4>
          <div className="project-client">
            <p className="intitule">Client :</p> <p>{project.client}</p>{" "}
          </div>
          <div className="project-technology">
            <p className="intitule"> Les technologies utilisées:</p>{" "}
            <p>{project.technology}</p>{" "}
          </div>
          <div className="project-description">
            <p className="intitule"> Description :</p>{" "}
            <p>{project.description}</p>{" "}
          </div>
          <div className="link-to">
            <div className="project-linktosite">
              <a
                href={project.link}
                className="project-linkto"
                target="blank"
                rel="noopener noreferer"
              >
                &#9758; voir le site
              </a>
            </div>
            <div className="project-contact">
              <Link className="project-linkto" to={"/contact"}>
                {" "}
                &#9758; échanger avec moi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
