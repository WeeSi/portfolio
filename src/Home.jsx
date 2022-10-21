import React, { useState } from "react";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Transition from "./Transition";
import gsap, { Power4 } from "gsap";
import SetCursorPoint from "./hooks/SetCursorPoint";
import BottomBarIcon from "./components/bottom-bar-icon/BottomBarIcon";

function Home(props) {
  const content = gsap.timeline({ defaults: { ease: "power2.out" } });

  return (
    <>
      <Transition timeline={content}>
        <SetCursorPoint />
        <About setDark={() => props.setDark()} />
        <BottomBarIcon />
        <Skills />
        <Experiences />
        <Projects />
      </Transition>
    </>
  );
}

export default Home;
