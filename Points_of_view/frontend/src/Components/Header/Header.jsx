import React from 'react';
import '../../Styles/Header.css';
import logo from '../../Images/logo-ru.svg';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return <div className="container header-container">
        <div className="header-logo">
            <img src={logo} alt="logo" />
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
            <button onClick={() => changeLanguage("ru")} className="lang-change-btn lang-change-btn--active">Ru</button>
            <button onClick={() => changeLanguage("en")} className="lang-change-btn">En</button>
            <button onClick={() => changeLanguage("fr")} className="lang-change-btn">Fr</button>
        </div>
    </div>
}

export default Header;