import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import '../../Styles/App.css'
import '../../Styles/Projects.css';

function Projects() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return <div className="container projects-container">
        <Subtitle text={t("projects-subtitle")} classNameSecond="projects-subtitle" />
        <Paragraph text={t("projects-p1")} classNameSecond="paragraph-projects" />
        <Paragraph text={t("projects-p2")} classNameSecond="paragraph-projects" />
    </div>
}

export default Projects;