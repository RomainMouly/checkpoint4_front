import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../assets/css/putModal.css";

const AddProject = () => {
  const [form, setForm] = useState({});
  const [projectLists, setProjectLists] = useState([]);
  const history = useHistory();

  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:3001/api/projects`, {
        ...form,
      })
      .then(() =>
        axios
          .get(`http://localhost:3001/api/projects`)
          .then((result) => setProjectLists(result.data))
      );
    history.push("/");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overlay">
      <div className="BlocInput">
        <h1>Ajouter un projet </h1>
        <div className="post-project">
          <input
            type="name"
            id="name"
            name="name"
            className="inputname"
            placeholder="nom du prjet"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="technology"
            id="technology"
            name="technology"
            className="inputname"
            placeholder="technologies"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="client"
            id="client"
            name="client"
            className="inputname"
            placeholder="client"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="post-project">
          <input
            type="date"
            id="date"
            name="date"
            className="inputname"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <p>
          <input
            type="picture"
            id="picture"
            name="picture"
            className="inputname"
            placeholder="photo"
            onChange={(e) => handleChange(e)}
          />
        </p>
        <div className="post-project">
          <textarea
            type="description"
            id="description"
            name="description"
            className="input-textarea"
            placeholder="description"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <button className="boutonPost" type="submit" onClick={handleSubmit}>
        Ajouter
      </button>
    </div>
  );
};

export default AddProject;
