// LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: require('../locales/en/translation.json')
          },
          ru: {
            translation: require('../locales/ru/translation.json')
          },
          fr: {
            translation: require('../locales/fr/translation.json')
          }
        },
        lng: language,
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false
        }
      });
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
