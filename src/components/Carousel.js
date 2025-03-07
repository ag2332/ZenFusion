import React, { useState } from "react"
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import card4 from '../images/card4.jpg'
import card5 from '../images/card5.jpg'

const Carousel = () => {

    const [cardsVisible, setCardsVisible] = useState(false);

    const toggleCards = () => {
        setCardsVisible(!cardsVisible);
    };

    const cards = [
        {
            id: 1,
            name: "Exquisite Seasonal Selection",
            description: "Expertly curated seasonal ingredients, blending fresh, vibrant produce with Japanese and Western influences, crafting exceptional dishes that change with the season to offer a delightful, ever-evolving culinary experience. This has lead to reinforcement of Satoshi-Style and it's culture.",
            imageUrl: card1,
        },
        {
            id: 2,
            name: "Masterful Precision and Craftsmanship",
            description: "With unparalleled precision, Chef Aiko Satoshi fuses classical Japanese techniques with Western innovations, transforming each dish into a true work of art that reflects her extraordinary skill and technical mastery, reshaping the initial perspectives.",
            imageUrl: card2,
        },
        {
            id: 3,
            name: "Umami Alchemy",
            description: "Chef Aiko Satoshi seamlessly balances the rich umami flavors of Japanese ingredients with luxurious Western elements, crafting dishes that offer an unforgettable, harmonious flavor experience that is transcendent, exceptional and revolutionary.",
            imageUrl: card3,
        },
        {
            id: 4,
            name: "Culinary Artistry in Presentation",
            description: "With exquisite attention to detail, traditional Japanese elegance is combined with Western aesthetics to create visually stunning dishes that captivate the senses. A fundamental building block of Satoshi-Style, presentation is key for Chef Aiko and at ZenFusion throughout our entire offering.",
            imageUrl: card4,
        },
        {
            id: 5,
            name: "Ethical Excellence and Sustainability",
            description: "Committed to sustainability, Chef Aiko blends Japanese and Western practices to ethically source ingredients, ensuring each dish is luxurious, conscientious, and reflective of a deep respect for the environment and Satoshi-Style, ensuring our integrity policy.",
            imageUrl: card5,
        }
    ];


    return (
        <div>
            <div className="carousel-divider">
                <div className="carousel-divider-text">
                    <h1>Featured</h1>
                    <h2>The Chef's Vision</h2>
                    <p className="carousel-text">Our very own Chef Aiko Satoshi, most well-known for her unique take on traditional Japanese cuisine, with a western take. Her vision can be understood through 5 key elements:</p>
                    <button className="toggle-button" onClick={toggleCards}>{cardsVisible ? 'Show Less' : 'Show More'}</button>
                </div>
            </div>

            {cardsVisible && (
                <div className={`cards ${cardsVisible ? 'visible' : ''}`}>
                    {cards.map((card) => (
                        <label className="carousel-label" key={card.id} id={card.id}>
                            <input className="carousel-input" type="checkbox" />
                            <div className="carousel-card">
                                <div className="front">
                                    <img src={card.imageUrl} alt=""/>
                                </div>
                                <div className="back">
                                    <header>
                                        <h2>{card.name}</h2>
                                    </header>
                                        <p>{card.description}</p>
                                    <div>
                                        <div className="c-line"></div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel;