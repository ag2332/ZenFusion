import React from "react";
import aboutImg from "../images/about-image.png";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <div className='about'>
            <div className="info-text">
                <div>
                    <h2 className="black-heading">Dining at Zen</h2>
                </div>
                <div>
                    <p>
                        At Zen Fusion, we blend traditional Asian flavors with a modern twist. Our menu features a fusion of bold spices, delicate textures, and fresh ingredients, offering a unique dining experience that
                        celebrates both heritage and innovation. Join us for an unforgettable journey through the tastes of Asia.
                    </p>
                    <p>
                        Our acclaimed foyer is the ultimate dining destination, offering an unparalleled fusion of bold Asian flavors and innovative techniques. With expertly crafted dishes, a luxurious atmosphere, and exceptional service, every meal is a memorable experience that elevates your senses and leaves you craving more.
                    </p>
                </div>
                <div>
                    <button className="button">Book a Table</button>
                </div>
            </div>
            <div className="squareImg">
                <img src={aboutImg} alt=""/>
            </div>
        </div>
    )
}

export default About;