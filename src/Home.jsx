import React from "react";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Transition from "./Transition";
import gsap from "gsap";
import SetCursorPoint from "./hooks/SetCursorPoint";

function Home(props) {
  const content = gsap.timeline({ defaults: { ease: "power2.out" } });

  return (
    <>
      <Transition timeline={content}>
        <SetCursorPoint />
        <About setDark={() => props.setDark()} />
        <Skills />
        <Experiences />
        <Projects />
      </Transition>
    </>
  );
}

export default Home;
