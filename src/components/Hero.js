import React from "react"
import HeroBackground from '../images/hero-background.jpg'

const Hero = () => {

    const heroStyle = {
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: ' 4rem',
        fontFamily: 'ferdinand',
    }

    return (
        <div>
            <div>
                <div style={heroStyle}>
                    <h2>Zen Fusion</h2>
                </div>
            </div>
            <div>
                <div className="divider">
                    <div className="line-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
