import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userConnectedAction } from "../../redux/actions/userAction";
import "../../assets/css/banner.css";

const Banner = ({ user, handleIsConnected }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleIsConnected(false);
  };

  return (
    <div className="container-banner">
      <div className="buttonBar">
        {!user.connected ? (
          <div>
            <Link className="link-page" to="/signin">
              &#10001;
            </Link>
          </div>
        ) : (
          <div className="linkPages">
            <div className="hello-name">
              Bonjour {user.data.firstname} {user.data.lastname}{" "}
            </div>
            <Link className="link-page log-out" onClick={(e) => handleClick(e)}>
              &#8635;
            </Link>

            <Link className="link-page" to="/admin">
              &#9993;
            </Link>
          </div>
        )}
      </div>
      <div className="box-name-projet">
        <div className="who-i-am">
          <h1 className="my-name">Romain Mouly</h1>
          <p className="slogan"> Développeur web et web mobile </p>
        </div>
        <div className="my-presentation">
          <p className="slogan"> Vous trouverez mes projets ci-dessous !</p>
          <p className="slogan">
            {" "}
            N'hésitez pas à cliquer dessus pour en savoir plus et me contacter.
          </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
