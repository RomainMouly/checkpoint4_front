import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/addProject.css";

const AddProject = ({ setProjectLists, isToggle, setIsToggle }) => {
  const [input, setInput] = useState({});

  const handleClick = async () => {
    await axios
      .post(`http://localhost:3001/api/projects`, {
        ...input,
      })
      .then(() =>
        axios
          .get(`http://localhost:3001/api/projects`)
          .then((result) => setProjectLists(result.data))
      );

    setIsToggle(!isToggle);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <div className="sessionsBlock">
      <p>
        <input
          type="name"
          id="name"
          name="name"
          placeholder="nom du projet"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <input
          type="technology"
          id="technology"
          name="technology"
          placeholder="technology"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <input
          type="client"
          id="client"
          name="client"
          placeholder="client"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="date"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <input
          type="picture"
          id="picture"
          name="picture"
          placeholder="photo"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <p>
        <input
          type="description"
          id="description"
          name="description"
          placeholder="description"
          onChange={(e) => handleChange(e)}
        />
      </p>
      <button
        className="petitboutton"
        type="submit"
        onClick={() => handleClick()}
      >
        Ajouter
      </button>
    </div>
  );
};

export default AddProject;
