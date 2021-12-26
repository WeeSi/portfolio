import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../store-redux/modalActions";

const Footer = (props) => {
  return (
    <section className="section-row lets-talk lets-talk-2019">
      <div className="screen-padding content-container z-10 relative justify-between flex items-center">
        <div className="text-content">
          <h4 className="wow fadeInUp font-bold">
            Intéressé par une collaboration?
          </h4>
          <p className="wow fadeInUp text-xl">
            Mettez-moi au défi pour créer vos nouveaux projets innovants.
          </p>
        </div>
        <button
          onClick={() => {
            let data = {
              modalOpen: true,
              modalRequired: false,
              modalTitle: "Parlons.",
            };

            props.openModal(data);
          }}
          className="shadow-md btn btn-default btn-foot wow fadeInUp flex justify-between items-center"
        >
          <span>Parlons</span> <i class="fa fa-chevron-right"></i>
        </button>
      </div>
      <div style={{ paddingTop: "100px" }} className="screen-padding z-10">
        <div class="footer content-container relative z-10">
          <div class="grid grid-cols-3">
            <div class="col-sm-6 col-xs-6 foot-contact">
              <a class="navbar-brand" href="https://sebostudio.com"></a>
              <div class="contact-items">
                <div class="contact-item">
                  <label>E.</label>
                  <a href="mailto:franckehuipro@gmail.com">
                    franckehuipro@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-2 col-xs-6 foot-about">
              <h5 className="text text-sm uppercase font-bold">A propos</h5>
              <ul class="menu">
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
            <div class="col-sm-2 col-xs-6 foot-social">
              <h5 className="text text-sm uppercase font-bold">Me Suivre</h5>
              <ul class="menu">
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
      <div className="screen-padding">
        <div class="copyright">2021 © Franck Ehui. All rights reserved.</div>
      </div>
    </section>
  );
};

export default connect(null, { openModal })(Footer);
