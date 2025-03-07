import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h1>ZenFusion</h1>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Specialities</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/">Reservations</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br/> 166 Berkley Square, Mayfair, London, W1J 0BU</li>
                    <li>Email: <br/> info@ZenFusion.com</li>
                    <li>Phone: <br/> 0800 123 4567</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;