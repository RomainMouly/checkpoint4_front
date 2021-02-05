import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../assets/css/putModal.css";

const PutModal = ({ match }) => {
  const { id } = match.params;
  const [form, setForm] = useState({});
  const [projectLists, setProjectLists] = useState([]);
  const [project, setProject] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/projects/${id}`)
      .then((response) => response.data)
      .then((data) => setProject(data[0]));
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:3001/api/projects/${id}`, {
        ...form,
      })
      .then(() =>
        axios
          .get(`http://localhost:3001/api/projects`)
          .then((result) => setProjectLists(result.data))
      );

    history.push("/");
  };

  return (
    <div className="overlay">
      <div className="BlocInput">
        <h1>Modifier le projet </h1>
        <div className="put-project">
          <input
            type="name"
            id="name"
            name="name"
            className="inputname"
            placeholder={project.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="put-project">
          <input
            type="technology"
            id="technology"
            name="technology"
            className="inputname"
            placeholder={project.technology}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="put-project">
          <input
            type="client"
            id="client"
            name="client"
            className="inputname"
            placeholder={project.client}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="put-project">
          <input
            type="date"
            id="date"
            name="date"
            className="inputname"
            placeholder={project.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p>
          <input
            type="picture"
            id="picture"
            name="picture"
            className="inputname"
            placeholder={project.picture}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <div className="put-project">
          <textarea
            type="description"
            id="description"
            name="description"
            className="input-textarea"
            placeholder={project.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <button className="boutonPost" type="submit" onClick={handleSubmit}>
        Envoyer
      </button>
    </div>
  );
};

export default PutModal;
