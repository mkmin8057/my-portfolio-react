import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app${isDark ? ' dark-mode' : ''}`}>
      <Nav isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
