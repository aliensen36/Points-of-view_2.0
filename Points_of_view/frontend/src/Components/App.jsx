import React from 'react';
import { LanguageProvider } from './LanguageContext.js';
import Header from './Header/Header.jsx';
import Hero from './Main/Hero.jsx';
import Who from './Main/Who.jsx';
import Projects from './Main/Projects.jsx';
import Mission from './Main/Mission.jsx';
import Team from './Main/Team.jsx';
import Idea from './Main/Idea.jsx';
import '../Styles/App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <section className="section-hero">
            <Hero />
          </section>
          <section className="section-who">
            <Who />
          </section>
          <section className="section-projects">
            <Projects />
          </section>
          <section className="section-mission">
            <Mission />
          </section>
          <section className="section-team">
            <Team />
          </section>
          <section className="section-idea">
            <Idea />
          </section>
        </main>
        <footer className="footer">

        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
