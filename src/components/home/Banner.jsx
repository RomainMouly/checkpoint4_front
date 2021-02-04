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
        <button className="button-retour">retour</button>

        {!user.connected ? (
          <div>
            <button type="button">
              <Link className="linkPages" to="/signin">
                CONNEXION
              </Link>
            </button>{" "}
          </div>
        ) : (
          <div className="linkPages">
            <div className="hello-name">
              Bonjour {user.data.firstname} {user.data.lastname}{" "}
            </div>
            <button className="log-out" onClick={(e) => handleClick(e)}>
              Déconnexion
            </button>
            <button type="button">
              <Link className="linkPages" to="/admin">
                message
              </Link>
            </button>{" "}
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
