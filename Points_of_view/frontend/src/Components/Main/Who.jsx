import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import SubtitleImgRu from '../../Images/who-subtitle-img-ru.svg';
import SubtitleImgEn from '../../Images/who-subtitle-img-en.svg';
import SubtitleImgFr from '../../Images/who-subtitle-img-fr.svg';
import WhoPic1 from '../../Images/who-pic-1.jpg';
import WhoPic2 from '../../Images/who-pic-2.svg';
import WhoPic3 from '../../Images/who-pic-3.jpg';
import WhoPic4 from '../../Images/who-pic-4.svg';
import WhoPic5 from '../../Images/who-pic-5.jpg';
import WhoPic6 from '../../Images/who-pic-6.jpg';
import '../../Styles/App.css'
import '../../Styles/Who.css';

function Who() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    function WhoPicture(props) {
        return <div className="who-picture">
            <img src={props.pic} alt="our works" />
        </div>
    }

    return (
        <div className="container">
            <div className="who-container">
                <Subtitle text={t("who-subtitle")} classNameSecond="who-subtitle" />
                <Paragraph text={t("who-p1")} classNameSecond="paragraph-who" />
                <Paragraph text={t("who-p2")} classNameSecond="paragraph-who" />
                <Paragraph text={t("who-p3")} classNameSecond="paragraph-who" />
                <div className="who-picture-container">
                    <WhoPicture pic={WhoPic1} />
                    <WhoPicture pic={WhoPic2} />
                    <WhoPicture pic={WhoPic3} />
                    <WhoPicture pic={WhoPic4} />
                    <WhoPicture pic={WhoPic5} />
                    <WhoPicture pic={WhoPic6} />
                </div>
            </div>
            <div className="who-subtitle-img">
                <img src={getSubtitleImage()} alt="subtitle about forms" />
            </div>
        </div>)

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