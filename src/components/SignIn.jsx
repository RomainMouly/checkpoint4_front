import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import "../assets/css/signIn.css";
import {
  userConnectedAction,
  userDataAction,
} from "../redux/actions/userAction";

const SignIn = ({ user, handleIsConnected, handleUserData }) => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async () => {
    await axios
      .post("http://localhost:3001/api/owners/login", watch())
      .then((response) => response.data)
      .then((data) => {
        axios({
          method: "post",
          url: "http://localhost:3001/api/profile",
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        })
          .then((response) => response.data)
          .then((data) => {
            handleIsConnected(true);
            handleUserData({
              firstname: data.firstname,
              lastname: data.lastname,
            });
          });
      });
  };

  const validation = {
    email: {
      required: "vous devez entrer un email",
      pattern: {
        value: /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-]{2,3})$/,
        message: "Votre email n'est pas au bon format",
      },
    },
    password: {
      required: "vous devez entrer un mot de passe",
      minLength: {
        value: 8,
        message:
          "Ce champs doit contenir au moins 8 caractères alphanumériques",
      },
    },
  };

  return (
    <div className="container-content-image">
      <div className="sign-in">
        {user.connected && <Redirect to="/" />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              className={errors.email ? "input-error" : "input-default"}
              ref={register(validation.email)}
            />
            {errors.email && (
              <span className="feedback-error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe : </label>
            <input
              type="password"
              name="password"
              id="password"
              className={errors.password ? "input-error" : "input-default"}
              ref={register(validation.password)}
            />
            {errors.password && (
              <span className="feedback-error">{errors.password.message}</span>
            )}
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleIsConnected: (newValue) => dispatch(userConnectedAction(newValue)),
  handleUserData: (newValue) => dispatch(userDataAction(newValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
