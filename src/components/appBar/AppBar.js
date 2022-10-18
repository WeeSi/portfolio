import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { openModal, toggleDrawer } from "../../store-redux/modalActions";

function AppBar(props) {
  const { cursorRef } = props;
  const buttonDrawer = useRef();
  const drawerOpen = props.drawer.drawerOpen;

  useEffect(() => {
    buttonDrawer.current.addEventListener("mouseover", (e) => {
      cursorRef.current.classList.add("is-clickable");
    });

    buttonDrawer.current.addEventListener("mouseleave", (e) => {
      cursorRef.current.classList.remove("is-clickable");
    });

    return () => {};
  }, []);

  const toggleDrawer = () => {
    const drawer = document.getElementsByClassName("drawer")[0];
    if (drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      document.body.style.overflow = "auto";
      props.toggleDrawer(false);
    } else {
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
          <div className="logo-container">
            <Link to="/">
              <h2>FE</h2>
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
        <div className={`relative overflow-hidden`} style={{ left: "-60px", top: "-8px", height:"24px" }}>
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
