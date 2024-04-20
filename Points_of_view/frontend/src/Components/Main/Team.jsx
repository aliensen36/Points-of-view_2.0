import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../LanguageContext';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import '../../Styles/App.css'
import '../../Styles/Team.css';

function Team() {
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();

    return <div className="container team-container">
        <Subtitle text={t("team-subtitle")} classNameSecond="team-subtitle" />
        <Paragraph text={t("team-p1")} classNameSecond="paragraph-team" />
    </div>
}

export default Team;