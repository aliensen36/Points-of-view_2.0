import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import logoRu from '../../Images/logo-ru.svg';
import logoEn from '../../Images/logo-en.svg';
import logoFr from '../../Images/logo-fr.svg';
import '../../Styles/Header.css';

function Header() {
    const { language, changeLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();

    const changeColorBtn = (language) => {
        changeLanguage(language);
    };

    function NavItem(props) {
        return <li className="header-nav-item"><a href="#" className="header-nav-link">{props.item}</a></li>
    }

    return (
        <div className="container header-container">
            <div className="header-logo">
                <img src={getLogo()} alt="logo" />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    {/* <li className="header-nav-item">{t("about")}</li>
                    <li className="header-nav-item">{t("projects")}</li>
                    <li className="header-nav-item">{t("works")}</li>
                    <li className="header-nav-item">{t("team")}</li>
                    <li className="header-nav-item">{t("contacts")}</li> */}
                    <NavItem item={t("about")} />
                    <NavItem item={t("projects")} />
                    <NavItem item={t("works")} />
                    <NavItem item={t("team")} />
                    <NavItem item={t("contacts")} />
                </ul>
            </nav>
            <div className="lang-change">
                <button onClick={() => changeColorBtn("ru")} className={`lang-change-btn ${language === 'ru' ? 'lang-change-btn--active' : ''}`}>Ru</button>
                <button onClick={() => changeColorBtn("en")} className={`lang-change-btn ${language === 'en' ? 'lang-change-btn--active' : ''}`}>En</button>
                <button onClick={() => changeColorBtn("fr")} className={`lang-change-btn ${language === 'fr' ? 'lang-change-btn--active' : ''}`}>Fr</button>
            </div>
        </div>
    );

    function getLogo() {
        switch (language) {
            case 'ru':
                return logoRu;
            case 'en':
                return logoEn;
            case 'fr':
                return logoFr;
            default:
                return logoEn;
        }
    }
}

export default Header;