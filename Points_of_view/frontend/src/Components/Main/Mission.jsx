import React from 'react';
import { useTranslation } from 'react-i18next';
import Subtitle from './Subtitle';
import '../../Styles/App.css'
import '../../Styles/Mission.css';
import Shapes from '../../Images/mission-shapes.svg'

function Mission() {
    const { t } = useTranslation();

    return <div className="container">
        <div className="mission-continer">
            <Subtitle text={t("mission-subtitle")} classNameSecond="mission-subtitle" />
            <div className="who-picture">
                <img src={Shapes} alt="shapes" />
            </div>
        </div>
    </div>
}

export default Mission;