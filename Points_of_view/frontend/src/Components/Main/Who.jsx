import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import SubtitleImgRu from '../../Images/who-subtitle-img-ru.svg';
import SubtitleImgEn from '../../Images/who-subtitle-img-en.svg';
import SubtitleImgFr from '../../Images/who-subtitle-img-fr.svg';
import '../../Styles/App.css'
import '../../Styles/Who.css';

function Who() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return <div className="container who-container">
        <Subtitle text={t("who-subtitle")} classNameSecond="who-subtitle" />
        <Paragraph text={t("who-p1")} classNameSecond="paragraph-who" />
        <Paragraph text={t("who-p2")} classNameSecond="paragraph-who" />
        <Paragraph text={t("who-p3")} classNameSecond="paragraph-who" />
        <div className="who-subtitle-img">
            <img src={getSubtitleImage()} alt="subtitle about forms" />
        </div>
    </div>

    function getSubtitleImage() {
        switch (language) {
            case 'ru':
                return SubtitleImgRu;
            case 'en':
                return SubtitleImgEn;
            case 'fr':
                return SubtitleImgFr;
            default:
                return SubtitleImgEn;
        }
    }
}

export default Who;