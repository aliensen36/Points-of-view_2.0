import React, { useContext, useState } from 'react';
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

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add logic here to handle form submission, like sending data to server, etc.
        fetch('http://127.0.0.1:8000/send_idea/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            // body: fd,
        })
    };

    return (
        <div className="container">
            <div className="idea-container">
                <div className="idea-subtitle">
                    <img src={getSubtitle()} alt="subtitle idea" />
                </div>
                <Paragraph text={t("idea-text")} classNameSecond="paragraph-idea" />

                <form onSubmit={handleSubmit} className="idea-form">
                    <input
                        type="text"
                        placeholder={t('form-name')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div className="idea-form-container">
                    <input
                        type="tel"
                        placeholder={t('form-tel')}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder={t('form-mail')}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    </div>
                    <textarea
                        placeholder={t('form-comment')}
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                    <button type="submit" className="idea-form-btn">{t('form-btn')} </button>
                </form>
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