import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experienc.js';
import Contact from './components/Contact';
import Sub_header from './components/Sub_header';
import Education from './components/Education';
import Project from './components/Projects';
import './index.css';

function App() {
  return (
    <div className="App">
      <section id='home'><Header /></section>
      <Sub_header />
      <section id="about"><Introduction /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
