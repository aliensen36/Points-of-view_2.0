import React, { useState } from 'react';
import '../../Styles/Header.css';
import logoRu from '../../Images/logo-ru.svg';
import logoEn from '../../Images/logo-en.svg';
import logoFr from '../../Images/logo-fr.svg';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
    const [activeLanguage, setActiveLanguage] = useState(i18n.language);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setActiveLanguage(language);
    };

    const changeColorBtn = (language) => {
        setActiveLanguage(language);
    };

    return <div className="container header-container">
        <div className="header-logo">
            <img src={getLogo()} alt="logo" />
        </div>
        <nav className="header-nav">
            <ul className="header-nav-list">
                <li className="header-nav-item">{t("about")}</li>
                <li className="header-nav-item">{t("projects")}</li>
                <li className="header-nav-item">{t("works")}</li>
                <li className="header-nav-item">{t("team")}</li>
                <li className="header-nav-item">{t("contacts")}</li>
            </ul>
        </nav>
        <div className="lang-change">
            <button onClick={() => { changeLanguage("ru"); changeColorBtn("ru") }} className={`lang-change-btn ${activeLanguage === 'ru' ? 'lang-change-btn--active' : ''}`}>Ru</button>
            <button onClick={() => { changeLanguage("en"); changeColorBtn("en") }} className={`lang-change-btn ${activeLanguage === 'en' ? 'lang-change-btn--active' : ''}`}>En</button>
            <button onClick={() => { changeLanguage("fr"); changeColorBtn("fr") }} className={`lang-change-btn ${activeLanguage === 'fr' ? 'lang-change-btn--active' : ''}`}>Fr</button>
        </div>
    </div>;

    function getLogo() {
        switch (i18n.language) {
            case 'ru':
                return logoRu;
            case 'en':
                return logoEn;
            case 'fr':
                return logoFr;
            default:
                return logoRu;
        }
    }
}

export default Header;