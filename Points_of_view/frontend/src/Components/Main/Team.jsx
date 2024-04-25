import React from 'react';
import { useTranslation } from 'react-i18next';
import Subtitle from './Subtitle';
import Paragraph from '../Paragraph';
import Image1 from '../../Images/team-card-img-1.png';
import Image2 from '../../Images/team-card-img-2.png';
import Image3 from '../../Images/team-card-img-3.png';
import '../../Styles/App.css'
import '../../Styles/Team.css';

function Team() {
    const { t } = useTranslation();

    function Card(props) {
        return (
            <div className={`team-card ${props.classNameSecond}`}>
                <img src={props.image} alt="member" className="team-card-image" />
                <h3 className="team-card-subtitle">{props.subtitle}</h3>
                <p className="team-card-role">{props.role}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="team-container">
                <Subtitle text={t("team-subtitle")} classNameSecond="team-subtitle" />
                <Paragraph text={t("team-p1")} classNameSecond="paragraph-team" />
                <div className="team-cards-container">
                    <div className="team-cards-ribbon">
                        <Card image={Image1} subtitle={t("team-card-subtitle-1")} role={t("team-card-role-1")} classNameSecond="team-card-1" />
                        <Card image={Image2} subtitle={t("team-card-subtitle-2")} role={t("team-card-role-2")} classNameSecond="team-card-2" />
                        <Card image={Image3} subtitle={t("team-card-subtitle-3")} role={t("team-card-role-3")} classNameSecond="team-card-3" />
                    </div>
                </div>
                <button className="team-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M0.933438 22.5777L12.2104 33L14.914 30.5014L6.00155 22.2644L40 22.2814L39.9979 18.7464L5.99948 18.7294L14.9023 10.5014L12.1958 8L0.930995 18.411C-0.310836 19.5587 -0.310641 21.4279 0.933438 22.5777Z" fill="white" />
                    </svg>
                </button>
                <button className="team-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                        <path d="M39.121 18.4167L27.8498 8L25.1447 10.5L34.0526 18.7325H0.0532229L0.0532227 22.2675H34.0526L25.1447 30.5L27.8498 33L39.121 22.5833C40.3635 21.435 40.3644 19.5658 39.121 18.4167Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Team;