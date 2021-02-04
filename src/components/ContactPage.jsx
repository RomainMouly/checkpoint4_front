import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/contactPage.css";
import { useHistory } from "react-router-dom";

const ContactPage = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post(`http://localhost:3001/api/contacts`, {
      ...form,
    });
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
        <h1>Me contacter </h1>

        <div className="PostLive">
          <input
            type="firstname"
            id="firstname"
            name="firstname"
            className="inputname"
            placeholder="Votre prénom"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="PostLive">
          <input
            type="lastname"
            id="lastname"
            name="lastname"
            className="inputname"
            placeholder="Votre nom"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="PostLive">
          <input
            type="email"
            id="email"
            name="email"
            className="inputname"
            placeholder="Votre email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="PostLive">
          <textarea
            type="message"
            id="message"
            name="message"
            className="input-textarea"
            placeholder="Votre message"
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

export default ContactPage;
