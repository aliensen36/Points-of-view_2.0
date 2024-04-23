import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Paragraph from '../Paragraph';
import SubtitleRu from '../../Images/idea-subtitle-ru.svg';
import SubtitleEn from '../../Images/idea-subtitle-en.svg';
import SubtitleFr from '../../Images/idea-subtitle-fr.svg';
import '../../Styles/Idea.css';

function Idea() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="idea-container">
                <div className="idea-subtitle">
                    <img src={getSubtitle()} alt="subtitle idea" />
                </div>
                <Paragraph text={t("idea-text")} classNameSecond="paragraph-idea" />
            </div>
        </div>
    )

    function getSubtitle() {
        switch (language) {
            case 'ru':
                return SubtitleRu;
            case 'en':
                return SubtitleEn;
            case 'fr':
                return SubtitleFr;
            default:
                return SubtitleEn;
        }
    }
}

export default Idea;