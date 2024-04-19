import React, { useContext } from 'react';
import '../../Styles/Hero.css';
import { useTranslation } from 'react-i18next';
import titleRu from '../../Images/title-ru.svg';
import titleEn from '../../Images/title-en.svg';
import titleFr from '../../Images/title-fr.svg';
import image from '../../Images/hero.svg';
import { LanguageContext } from '../LanguageContext';

function Hero() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <div className="container hero-container">
            <h1 className="hero-title">
                <img src={getTitleImage()} alt="title" />
            </h1>
            <p className="hero-subtitle">
                {t("hero-subtitle")}
            </p>
            <button className="hero-btn">
                {t("hero-btn")}
            </button>
            <div className="hero-img">
                <img src={image} alt="title" />
            </div>
        </div>
    );

    function getTitleImage() {
        switch (language) {
            case 'ru':
                return titleRu;
            case 'en':
                return titleEn;
            case 'fr':
                return titleFr;
            default:
                return titleRu;
        }
    }
}

export default Hero;