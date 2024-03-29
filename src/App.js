import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/appBar/AppBar";
import Modal from "./components/modal/Modal";
import { connect } from "react-redux";
import Drawer from "./components/drawer/Drawer";
import SetCursorPoint from "./hooks/SetCursorPoint";
import ScrollToTop from "./components/ScrollToTop";
import Portal from "./components/portal/Portal";
import Contact from "./Contact";
import Footer from "./components/footer/Footer";

function App(props) {
  const [dark, setDark] = useState(true);
  const cursor = useRef();

  useEffect(() => {
    document.body.addEventListener("mousemove", (e) => {
      cursor.current.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
  }, []);

  return (
    <div className={`App ${dark ? "bg-dark" : "bg-white"}`}>
      <SetCursorPoint />
      <BrowserRouter>
        <ScrollToTop />
        <AppBar cursorRef={cursor} />
        <Drawer cursorRef={cursor} />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Modal />
      <Portal>
        <div ref={cursor} className="cursor hidden sm:block"></div>
      </Portal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(App);
