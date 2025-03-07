import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../images/confirm-image.jpg"
import Grid12 from "./atoms/Grid12";
import GridImage from "./atoms/GridImage";
import GridText from "./atoms/GridText";

const ConfirmedBooking = () => {
    return (
    <Grid12>
        <GridText>
            <h2 className="black-heading">Booking has been <span>confirmed</span></h2>
            <h3>We look forward to hosting you at ZenFusion</h3>
            <p>A confirmation email has been sent to your email address.</p>
            <Link to="/">
                <button className="button" aria-label="On Click">Return to Home</button>
            </Link>
        </GridText>
        <GridImage>
            <img src={mainImg} alt=""/>
        </GridImage>
    </Grid12>
    );
};

export default ConfirmedBooking;