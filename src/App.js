import './App.scss';
import { useState } from 'react';
import About from './components/about/About';
import AppBar from './components/appBar/AppBar';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';

function App() {

  const [dark, setDark] = useState(false);

  return (
    <div className={`App ${dark ? 'bg-dark' : 'bg-white'}`}>
      <AppBar />
      <About setDark={() => setDark(!dark)} />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
