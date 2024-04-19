import React from 'react';
import '../Styles/App.css';
import Header from './Header/Header.jsx';
import Hero from './Main/Hero.jsx';
import About from './Main/About.jsx';
import { LanguageProvider } from './LanguageContext.js';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <section className="section-hero">
            <Hero />
          </section>
          <section className="section-about">
            <About />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
