import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/adminPage.css";

const AdminPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/contacts`)
      .then((result) => setMessages(result.data));
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:3001/api/contacts/${id}`);
    await setMessages(messages.filter((mess) => mess.id !== id));
  };

  return messages.map((mess) => (
    <div className="overlay-admin">
      <div className="bubble">
        <div className="bubble-text">
          <div className="contact-name">
            <p>{mess.firstname}</p>
            <p>{mess.lastname}</p>
            <p>{mess.email}</p>
          </div>
          <div className="contact-message">
            <p>{mess.message}</p>
          </div>
          <div>
            <button
              className="deleteCross"
              type="button"
              onClick={() => handleDelete(mess.id)}
            >
              &#215;
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default AdminPage;
