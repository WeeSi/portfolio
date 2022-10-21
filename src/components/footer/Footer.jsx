import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { openModal } from "../../store-redux/modalActions";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".footer-container", { yPercent: -30 });

    const uncover = gsap.timeline({ paused: true });

    uncover.to(".footer-container", { yPercent: 0, ease: "none" });

    ScrollTrigger.create({
      trigger: ".conclusion",
      start: "bottom bottom",
      end: "+=75%",
      animation: uncover,
      scrub: true,
    });
  }, [pathname]);

  return (
    <section className="footer-container section-row lets-talk lets-talk-2019">
      <div className="content-container flex">
        <div className="interest md:px-20 px-4 z-10 relative grid md:grid-cols-2 grid-cols-1 gap-y-10 justify-between items-center">
          <div className="text-content md:width-auto">
            <h4 className=" font-bold text-5xl">
              Intéressé par une collaboration?
            </h4>
            <h4 className=" font-light">
              <a href="contact" className="animate-stay">Contactez-moi</a>
            </h4>
          </div>
        </div>
        <div style={{ padding: "0 180px" }} className="md:px-20 px-4 z-10">
          <div className="footer relative z-10">
            <div className="flex">
              <div
                style={{ flex: "1", WebkitBoxFlex: "1", MozBoxFlex: "1" }}
                className="foot-contact"
              >
                <a className="navbar-brand" href="https://sebostudio.com"></a>
                <div className="contact-items">
                  <div className="contact-item">
                    <a
                      className="animate"
                      href="mailto:franckehuipro@gmail.com"
                    >
                      franckehuipro@gmail.com
                    </a>
                    <div className="copyright mt-5">
                      2021 © Franck Ehui. All rights reserved.
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  WebkitBoxFlex: "1",
                  MozBoxFlex: "1",
                  padding: "0 0 0 40px",
                }}
              >
                <div className="foot-about">
                  <ul className="menu">
                    <li>
                      <a className="menu-item animate">A Propos</a>
                    </li>
                    <li>
                      <a className="menu-item animate">Compétences</a>
                    </li>
                    <li>
                      <a className="menu-item animate">Projets</a>
                    </li>
                  </ul>
                </div>
                <div className="foot-social">
                  <ul className="menu">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="menu-item animate"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="menu-item animate"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        className="menu-item animate"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { openModal })(Footer);
