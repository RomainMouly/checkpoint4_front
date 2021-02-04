import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/putModal.css";
import ScrollToTop from "../ScrollToTop";

const PutModal = ({ id, setToggleModal, setProjectLists }) => {
  const [input, setInput] = useState({});
  const [project, setProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data[0]));
  }, [id]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleClick = async () => {
    await axios
      .put(`http://localhost:3001/api/projects/${id}`, {
        ...input,
      })
      .then(() =>
        axios
          .get(`http://localhost:3001/api/projects`)
          .then((result) => setProjectLists(result.data))
      );

    setToggleModal(null);
  };

  return (
    <div className="overlay-modal">
      <ScrollToTop />
      <div className="contenu-modal">
        <button
          type="button"
          onClick={() => setToggleModal(null)}
          className="btnClose"
        >
          Fermer
        </button>

        <p>
          <input
            type="name"
            id="name"
            name="name"
            placeholder={project.name}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <input
            type="technology"
            id="technology"
            name="technology"
            placeholder={project.technology}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <input
            type="client"
            id="client"
            name="client"
            placeholder={project.client}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <input
            type="date"
            id="date"
            name="date"
            placeholder={project.date}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <input
            type="picture"
            id="picture"
            name="picture"
            placeholder={project.picture}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <input
            type="description"
            id="description"
            name="description"
            placeholder={project.description}
            onChange={(e) => handleChange(e)}
          />
        </p>

        <button
          className="petitboutton"
          type="submit"
          onClick={() => handleClick()}
        >
          Modifier le projet
        </button>
      </div>
    </div>
  );
};

export default PutModal;
