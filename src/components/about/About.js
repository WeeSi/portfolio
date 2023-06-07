import gsap from "gsap";
import React, { useEffect } from "react";
import BottomBarIcon from "../bottom-bar-icon/BottomBarIcon";

export default function About(props) {
  const tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });

  useEffect(() => {
    tl.to(".desc-me", {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
      opacity: 1,
    });

    return () => {};
  }, []);

  return (
    <section id="section-1" className="relative">
      <div className="about md:flex md:h-screen md:px-20 px-4 screen-padding">
        <div class="bg-overlay-black"></div>
        <div className="md:w-3/6 px-3 image-me-container">
          <div className="image-me relative">
            <img
              src={require("../../image/received_1291899467620740-removebg-preview.png")}
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="md:w-3/6 px-3 relative z-10 desc-me-container">
          <div>
            <div className="overflow-hidden">
              <h1 className="opacity-0 desc-me font-bold text-5xl mb-5 ">
                Je suis créateur d'application mobile, web et logiciel.
              </h1>
            </div>
            <div className="overflow-hidden">
              <p
                style={{ color: "var(--text-color)" }}
                className="opacity-0 wow fadeInUp text-xl desc-me"
              >
                Ingénieur informatique chez WeCount, compétent en programmation,
                conception logicielle et résolution de problèmes techniques.
                Prêt à relever des défis et contribuer à des projets ambitieux.
              </p>
            </div>
            <div className="mt-3">
              <Social />
            </div>
          </div>
        </div>
      </div>
      <BottomBarIcon />
    </section>
  );
}

const Social = () => {
  return (
    <div className="flex space-x-2 items-center social">
      <a target="_blank" href="https://github.com/WeeSi">
        <div
          style={{ background: "#ededed", width: "45px", height: "45px" }}
          className=" inline-flex items-center p-3 rounded-full justify-center"
        >
          <i className="fab text-black fa-github-alt"></i>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/franck-ehui-386505170/"
      >
        <div
          style={{ background: "#ededed", width: "45px", height: "45px" }}
          className=" inline-flex items-center p-3 rounded-full justify-center"
        >
          <i className="fab text-black fa-linkedin-in"></i>
        </div>
      </a>

      <a target="_blank" href="https://www.instagram.com/franckwiiseegoht/">
        <div
          style={{ background: "#ededed", width: "45px", height: "45px" }}
          className=" inline-flex items-center p-3 rounded-full justify-center"
        >
          <i className="fab text-black fa-instagram"></i>
        </div>
      </a>
    </div>
  );
};
