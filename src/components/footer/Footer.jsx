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
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className="col-sm-6 col-xs-6 foot-contact">
              <a className="navbar-brand" href="https://sebostudio.com"></a>
              <div className="contact-items">
                <div className="contact-item">
                  <label>E.</label>
                  <a href="mailto:franckehuipro@gmail.com">
                    franckehuipro@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-xs-6 foot-about">
              <h5 className="text text-sm uppercase font-bold">A propos</h5>
              <ul className="menu">
                <li>
                  <a className="menu-item">
                    A Propos
                  </a>
                </li>
                <li>
                  <a
                    
                    className="menu-item"
                  >
                    Mes Compétences
                  </a>
                </li>
                <li>
                  <a
                  
                    className="menu-item"
                  >
                    Mes projets
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 col-xs-6 foot-social">
              <h5 className="text text-sm uppercase font-bold">Me Suivre</h5>
              <ul className="menu">
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                  
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                   
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
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
