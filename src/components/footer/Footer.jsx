import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../store-redux/modalActions";

const Footer = (props) => {
  return (
    <section className="section-row lets-talk lets-talk-2019">
      <div className="screen-padding md:px-20 px-4 content-container z-10 relative grid md:grid-cols-2 grid-cols-1 gap-y-10 justify-between items-center">
        <div className="text-content md:width-auto">
          <h4 className="wow font-bold">
            Intéressé par une collaboration?
          </h4>
          <p className="wow fadeInUp md:text-xl text-lg">
            Mettez-moi au défi pour créer vos nouveaux projets innovants.
          </p>
        </div>
        <div className="md:block flex">
        <button
          onClick={() => {
            let data = {
              modalOpen: true,
              modalRequired: false,
              modalTitle: "Discutons.",
            };

            props.openModal(data);
          }}
          className="shadow-md btn btn-default btn-foot wow fadeInUp flex justify-between items-center"
        >
          <span>Discutons</span> <i className="fa fa-chevron-right"></i>
        </button>
        </div>
      </div>
      <div style={{ paddingTop: "100px" }} className="screen-padding md:px-20 px-4 z-10">
        <div className="footer content-container relative z-10">
          <div className="grid md:grid-cols-6 grid-cols-1">

            <div className="col-span-2 foot-contact">
              <a className="navbar-brand" href="https://sebostudio.com"></a>
              <div className="contact-items">
                <div className="contact-item">
                  <label>E.</label>
                  <a className="animate" href="mailto:franckehuipro@gmail.com">
                    franckehuipro@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-2 col-xs-6 foot-about">
              <ul className="menu">
                <li>
                  <a  className="menu-item animate">
                    A Propos
                  </a>
                </li>
                <li>
                  <a
                    className="menu-item animate"
                  >
                    Mes Compétences
                  </a>
                </li>
                <li>
                  <a
                  
                  className="menu-item animate"
                  >
                    Mes projets
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-6 foot-social">
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
                    Dribbble
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
      <div className="screen-padding md:px-20 px-4 z-10">
        <div className="copyright">2021 © Franck Ehui. All rights reserved.</div>
      </div>
    </section>
  );
};

export default connect(null, { openModal })(Footer);
