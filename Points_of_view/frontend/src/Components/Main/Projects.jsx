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

    return (
        <div className="container">
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
                <button className="project-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                        <path d="M0.933438 22.5777L12.2104 33L14.914 30.5014L6.00155 22.2644L40 22.2814L39.9979 18.7464L5.99948 18.7294L14.9023 10.5014L12.1958 8L0.930995 18.411C-0.310836 19.5587 -0.310641 21.4279 0.933438 22.5777Z" fill="white" />
                    </svg>
                </button>
                <button className="project-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 41 40" fill="none">
                        <path d="M39.121 18.4167L27.8498 8L25.1447 10.5L34.0526 18.7325H0.0532229L0.0532227 22.2675H34.0526L25.1447 30.5L27.8498 33L39.121 22.5833C40.3635 21.435 40.3644 19.5658 39.121 18.4167Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );

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