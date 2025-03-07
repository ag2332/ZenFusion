import React from "react";
import SpecialityImg from "../images/speciality-image.png";
import { Link } from "react-router-dom";

const Speciality = () => {


    return (
        <div className='about'>
            <div className="squareImg">
                <img src={SpecialityImg} alt=""/>
            </div>
            <div className="info-text">
                <div>
                    <h2 className="black-heading">Specialities</h2>
                </div>
                <div>
                    <p>Indulge in an extraordinary dining experience at Zen Fusion, expertly curated by Chef Aiko Satoshi, a globally acclaimed culinary icon renowned for his innovative approach to Asian fusion. Chef Takahashi’s mastery blends tradition with modern techniques, creating a dining experience that defines excellence.</p>
                    <li><b>Wagyu Beef Sushi Rolls</b> - Japanese Wagyu with arakata rice, sets of 3</li>
                    <li><b>Truffle Miso Black Cod </b>- Seared Atlantic Cod with Thai Miso</li>
                    <li><b>Lobster and Saffron Dumplings</b> - Handcaught lobster with saffron and lemongrass</li>
                    <Link>
                        <button className="button">View Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Speciality;