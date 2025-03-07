import React from "react";
import SpecialityImg from "../images/speciality-image.png";
import { Link } from "react-router-dom";
import Grid12 from "./atoms/Grid12";
import GridText from "./atoms/GridText";
import GridImage from "./atoms/GridImage";

const Speciality = () => {
  return (
    <Grid12>
      <GridImage>
        <img src={SpecialityImg} alt="" />
      </GridImage>
      <GridText>
        <h2 className="black-heading">Specialities</h2>
        <p>
          Indulge in an extraordinary dining experience at Zen Fusion, expertly
          curated by Chef Aiko Satoshi, a globally acclaimed culinary icon
          renowned for his innovative approach to Asian fusion. Chef Takahashi’s
          mastery blends tradition with modern techniques, creating a dining
          experience that defines excellence.
        </p>
        <li>
          <b>Wagyu Beef Sushi Rolls</b> - Japanese Wagyu with arakata rice, sets
          of 3
        </li>
        <li>
          <b>Truffle Miso Black Cod </b>- Seared Atlantic Cod with Thai Miso
        </li>
        <li>
          <b>Lobster and Saffron Dumplings</b> - Handcaught lobster with saffron
          and lemongrass
        </li>
        <Link>
          <button className="button">View Menu</button>
        </Link>
      </GridText>
    </Grid12>
  );
};

export default Speciality;
