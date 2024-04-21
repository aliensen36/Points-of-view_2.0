import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import FeelImgRu from '../../Images/feel-ru.svg';
import FeelImgEn from '../../Images/feel-en.svg';
import FeelImgFr from '../../Images/feel-fr.svg';
import MeditateImgRu from '../../Images/meditate-ru.svg';
import MeditateImgEn from '../../Images/meditate-en.svg';
import MeditateImgFr from '../..//Images/meditate-fr.svg';
import ThinkImgRu from '../../Images/think-ru.svg';
import ThinkImgEn from '../../Images/think-en.svg';
import ThinkImgFr from '../../Images/think-fr.svg';
import '../../Styles/App.css'
import '../../Styles/Projects.css';

function Projects() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return <div className="container">
        <div className="projects-container">
            <Subtitle text={t("projects-subtitle")} classNameSecond="projects-subtitle" />
            <Paragraph text={t("projects-p1")} classNameSecond="paragraph-projects" />
            <Paragraph text={t("projects-p2")} classNameSecond="paragraph-projects" />

            <div className="project-img project-feel-img">
                <img src={getFeelImage()} alt="feel" />
            </div>
            <div className="project-img project-meditate-img">
                <img src={getMeditateImage()} alt="meditate" />
            </div>
            <div className="project-img project-think-img">
                <img src={getThinkImage()} alt="think" />
            </div>
        </div>
    </div>

    function getFeelImage() {
        switch (language) {
            case 'ru':
                return FeelImgRu;
            case 'en':
                return FeelImgEn;
            case 'fr':
                return FeelImgFr;
            default:
                return FeelImgEn;
        }
    }

    function getMeditateImage() {
        switch (language) {
            case 'ru':
                return MeditateImgRu;
            case 'en':
                return MeditateImgEn;
            case 'fr':
                return MeditateImgFr;
            default:
                return MeditateImgEn;
        }
    }

    function getThinkImage() {
        switch (language) {
            case 'ru':
                return ThinkImgRu;
            case 'en':
                return ThinkImgEn;
            case 'fr':
                return ThinkImgFr;
            default:
                return ThinkImgEn;
        }
    }
}

export default Projects;