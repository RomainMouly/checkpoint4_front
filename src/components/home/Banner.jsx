import React from "react";
import "../../assets/css/banner.css";

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="buttonBar">
        <button className="button-retour">retour</button>

        <button className="button-connexion">connexion</button>
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

export default Banner;
