import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userConnectedAction } from "../../redux/actions/userAction";
import PutModal from "./PutModal";
import AddProject from "./AddProject";
import "../../assets/css/projectList.css";

const ProjectList = ({ user, handleIsConnected }) => {
  const [projectLists, setProjectLists] = useState([]);
  const [toggleModal, setToggleModal] = useState(null);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects`)
      .then((response) => setProjectLists(response.data));
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:3001/api/projects/${id}`);
    await setProjectLists(projectLists.filter((pro) => pro.id !== id));
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="Project-list">
      {projectLists.map((project) => (
        <div className="project-block">
          <Link className="project-link" to={`/projects/${project.id}`}>
            <div className="blockImage">
              <img
                src={project.picture}
                alt={project.name}
                className="project-picture"
              />
            </div>
            <div className="blockText">
              <h2>{project.name}</h2>
              <h4>{project.date}</h4>
            </div>
          </Link>
          {user.connected ? (
            <div className="put-delete">
              <button
                className="petitboutton"
                type="button"
                value={project.id}
                onClick={() => setToggleModal(project.id)}
              >
                <img
                  alt="boutoncrayon"
                  src="https://img.icons8.com/material-outlined/24/000000/pencil--v2.png"
                />
              </button>

              <button
                className="petitboutton"
                type="button"
                onClick={() => handleDelete(project.id)}
              >
                <img
                  alt="boutonpoubelle"
                  src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"
                />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
      {user.connected ? (
        <button
          className="addboutton"
          type="button"
          onClick={() => handleToggle()}
        >
          +
        </button>
      ) : (
        ""
      )}
      {toggleModal !== null && (
        <PutModal
          id={toggleModal}
          setToggleModal={setToggleModal}
          projectLists={projectLists}
          setProjectLists={setProjectLists}
        />
      )}
      <div className="add-project">
        {isToggle && (
          <AddProject
            setProjectLists={setProjectLists}
            isToggle={isToggle}
            setIsToggle={setIsToggle}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleIsConnected: (newValue) => dispatch(userConnectedAction(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
