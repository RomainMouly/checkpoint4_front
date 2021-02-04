import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [ProjectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects`)
      .then((response) => setProjectList(response.data));
  }, []);

  return (
    <div className="Project-list">
      {ProjectList.map((project) => (
        <div className="ProgBloc">
          <div className="DescriptionProg">
            <div className="BlockImage">
              <img
                src={project.image}
                alt={project.name}
                className="ImageLive"
              />
            </div>
            <div className="BlockText">
              <h2>{project.name}</h2>
              <h3>{project.technology}</h3>
              <h3>{project.client}</h3>
              <h4>{project.date}</h4>

              <Link className="prog-live-button" to={`/projects/${project.id}`}>
                Plus de détails
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
