import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
