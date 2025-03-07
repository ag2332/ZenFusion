import React from "react"
import HeroBackground from '../images/carousel-hero-background.jpg'

const CarouselHero = () => {

    const CarouselHeroStyle = {
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
                <div style={CarouselHeroStyle}>
                </div>
            </div>
        </div>
    )
}

export default CarouselHero