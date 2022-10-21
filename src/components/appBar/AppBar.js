import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { openModal, toggleDrawer } from "../../store-redux/modalActions";

function AppBar(props) {
  const { cursorRef } = props;
  const buttonDrawer = useRef();
  const drawerOpen = props.drawer.drawerOpen;
  const [showAlternateLogo, setShowAltLogo] = useState(false);

  useEffect(() => {
    buttonDrawer.current.addEventListener("mouseover", (e) => {
      cursorRef.current.classList.add("is-clickable");
    });

    buttonDrawer.current.addEventListener("mouseleave", (e) => {
      cursorRef.current.classList.remove("is-clickable");
    });

    return () => {};
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScrollEvent);
  }, []);

  const onScrollEvent = (e) => {
    if (window.scrollY > 1000) {
      setShowAltLogo(true);
    } else setShowAltLogo(false);
  };
  const toggleDrawer = () => {
    const drawer = document.getElementsByClassName("drawer")[0];
    const drawerBg = document.getElementsByClassName("drawer-bg")[0];
    const DrawerFooter = document.querySelector(".drawer .footer");
    const DrawerMenu = document.querySelector(".drawer .menu");
    const DrawerSocial = document.querySelector(".drawer .social");

    if (drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      document.body.style.overflow = "auto";
      props.toggleDrawer(false);
    } else {
      drawerBg.style.transition = "transform .4s";
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
      props.toggleDrawer(true);
    }
  };

  return (
    <>
      <div
        className="md:block"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "20",
          transition: "0.7s",
          top: "0",
        }}
      >
        <div className="app-bar">
          <div
            className={`logo-container ${!showAlternateLogo ? "show" : "hide"}`}
          >
            <Link to="/">
              <h2>Franck</h2>
              <h2>Ehui</h2>
            </Link>
          </div>

          <div
            className={`logo-container alt ${
              showAlternateLogo ? "show" : "hide"
            }`}
          >
            <Link to="/">
              <h2>Fehui</h2>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => toggleDrawer()}
        ref={buttonDrawer}
        className="drawer-button"
        style={{
          background: "none",
          border: "unset",
          color: "unset",
          height: "16px",
          padding: "0",
          zIndex: "999999999999999999",
          top: "33px",
          position: "fixed",
          right: "30px",
        }}
      >
        <div
          className={`relative overflow-hidden`}
          style={{ left: "-60px", top: "-8px", height: "24px" }}
        >
          <p className={`close-text-drawer ${drawerOpen && "close"}`}>Close</p>
          <p className={`open-text-drawer ${!drawerOpen && "open"}`}>Menu</p>
        </div>
        <div className={`content-drawer-button ${drawerOpen && "open"}`}>
          <span />
          <span />
        </div>
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  drawer: state.modal,
});

export default connect(mapStateToProps, { openModal, toggleDrawer })(AppBar);
