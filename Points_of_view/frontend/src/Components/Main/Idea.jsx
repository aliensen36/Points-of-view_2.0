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
        message: ''
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/send_idea/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(() => {
            setModalMessage('Спасибо! Ваш отклик уже у нас!');
            setModalVisible(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        }).catch(error => {
            setModalMessage('Произошла ошибка при отправке сообщения');
            setModalVisible(true);
        });
    };

    const closeModal = () => {
        setModalVisible(false);
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button type="submit" className="idea-form-btn">{t('form-btn')} </button>
                </form>

                {modalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>{modalMessage}</p>
                            <button className="modal-close" onClick={closeModal}>Закрыть</button>
                        </div>
                    </div>
                )}
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