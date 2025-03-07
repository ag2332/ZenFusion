import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../images/confirm-image.jpg"

const ConfirmedBooking = () => {
    return (
    <div className="about">
        <div className="form-info">
            <h2 className="black-heading">Booking has been <span>confirmed</span></h2>
            <h3>We look forward to hosting you at ZenFusion</h3>
            <p>A confirmation email has been sent to your email address.</p>
            <Link to="/">
                <button className="button" aria-label="On Click">Return to Home</button>
            </Link>
        </div>
        <div className="squareImg">
            <img src={mainImg} alt=""/>
        </div>
    </div>
    );
};

export default ConfirmedBooking;