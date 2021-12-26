import React, { useState } from 'react';
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";

function Home(props) {
  return (
    <>
      <About setDark={() => props.setDark()} />
      <Skills />
      <Experiences />
      <Projects />
    </>
  );
}

export default Home;
