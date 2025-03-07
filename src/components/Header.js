import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../images/banner-image.jpg";
import Grid12 from "./atoms/Grid12";
import GridText from "./atoms/GridText";
import GridImage from "./atoms/GridImage";

const Header = () => {
    return (
        <Grid12>
                <GridText>
                    <h2 className="black-heading">Book a Table</h2>
                    <h3>The Essence of Asian flavors, in Mayfair</h3>
                    <p>
                        Experience the pinnacle of Asian cuisine at our family-owned restaurant, where we serve only the finest
                        ingredients and time-honored recipes, crafted to perfection.
                    </p>
                    <Link to="/booking">
                        <button className="button">Reserve a Table</button>
                    </Link>
                </GridText>
                <GridImage>
                    <img src={mainImg} alt=""/>
                </GridImage>
        </Grid12>
    );
};

export default Header;