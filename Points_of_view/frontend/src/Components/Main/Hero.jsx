import React from 'react';
import '../../Styles/Hero.css';
import title from '../../Images/title-ru.svg'
import image from '../../Images/hero.svg'

function Hero() {
    return <div className="container hero-container">
        <h1 className="hero-title">
            <img src={title} alt="title" />
        </h1>
        <p className="hero-subtitle">
            Объединяем творческих людей<br />в совместной реализации их талантов
        </p>
        <button className="hero-btn">
            Узнать больше
        </button>
        <div className="hero-img">
            <img src={image} alt="title" />
        </div>
    </div>
}

export default Hero;