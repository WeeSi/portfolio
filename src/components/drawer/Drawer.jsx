import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { openModal, toggleDrawer } from "../../store-redux/modalActions";
import { useLocation } from "react-router-dom";

const Drawer = (props) => {
  const { cursorRef } = props;
  const node = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    node.current.addEventListener("mouseover", (e) => {
      cursorRef.current.classList.add("is-clickable");
    });

    node.current.addEventListener("mouseleave", (e) => {
      cursorRef.current.classList.remove("is-clickable");
    });

    return () => {};
  }, []);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.onpopstate = (e) => {
      console.log(e);
      closeDrawer(false);
    };
  }, []);

  const closeDrawer = (animation) => {
    const drawer = document.getElementsByClassName("drawer")[0];
    const drawerBg = document.getElementsByClassName("drawer-bg")[0];
    const DrawerFooter = document.querySelector(".drawer .footer");
    const DrawerMenu = document.querySelector(".drawer .menu");
    const DrawerSocial = document.querySelector(".drawer .social");

    console.log(DrawerFooter)
    if (!animation) {
      drawerBg.style.transition = "unset";
    }

    drawer.classList.remove("open");
    document.body.style.overflow = "auto";
    props.toggleDrawer(false);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      if (e.which === 1) {
        closeDrawer(true);
      }
    }
  };

  return (
    <div className="drawer">
      <div className="relative h-full">
        <div className="relative z-20 right-0 pt-20 h-full flex flex-col">
          <div
            style={{
              display: "flex",
              padding: "0px 98px",
              alignItems: "center",
            }}
            className="w-full h-full"
          >
            <div className="flex w-full">
              <ul
                className="block space-y-6"
                style={{ WebkitBoxFlex: "0.8", flex: "0.8" }}
              >
                <span className="opacity-60 pb-7 block social">Social</span>
                <li
                  style={{
                    "--i": 10,
                    fontSize: ".9375rem",
                    fontWeight: "normal",
                  }}
                  className="block w-full text-left"
                >
                  <a href="contact" className="animate">
                    Contact
                  </a>
                </li>
                <li
                  style={{
                    "--i": 11,
                    fontSize: ".9375rem",
                    fontWeight: "normal",
                  }}
                  className="block w-full text-left"
                >
                  <a
                    target={"_blank"}
                    href="https://github.com/WeeSi"
                    rel="noreferrer"
                    className="animate"
                  >
                    Github
                  </a>
                </li>
                <li
                  style={{
                    "--i": 12,
                    fontSize: ".9375rem",
                    fontWeight: "normal",
                  }}
                  className="block w-full text-left"
                >
                  <a className="animate">Instagram</a>
                </li>
                <li
                  style={{
                    "--i": 13,
                    fontSize: ".9375rem",
                    fontWeight: "normal",
                  }}
                  className="block w-full text-left"
                >
                  <a className="animate">Linkedin</a>
                </li>
              </ul>
              <ul>
                <span className="opacity-60 pb-7 block menu">Menu</span>
                <li style={{ "--i": 0 }} className="block w-full text-left">
                  <a className="animate">A proppos</a>
                </li>
                <li style={{ "--i": 1 }} className="block w-full text-left">
                  <a className="animate">Compétences</a>
                </li>
                <li style={{ "--i": 2 }} className="block w-full text-left">
                  <a className="animate">Expérience</a>
                </li>
                <li style={{ "--i": 9 }} className="block w-full text-left">
                  <a className="animate">Projets</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer" style={{ padding: "0 0 50px 0" }}>
            <div style={{ padding: "0 98px" }}>
              <span className="opacity-50 block">Rentrons en contact</span>
              <span className="email-get-in-touch block">
                <a style={{ textDecoration: "underline" }}>
                  franckehuipro@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <span className="drawer-bg"></span>
        <div ref={node} className="backdrop"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  drawer: state.modal,
});

export default connect(mapStateToProps, { openModal, toggleDrawer })(Drawer);
