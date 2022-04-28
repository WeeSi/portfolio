import './App.scss';
import React, { useState } from 'react';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Article from './Article';
import AppBar from './components/appBar/AppBar';
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { connect } from "react-redux";

function App(props) {
  const [dark, setDark] = useState(localStorage.dark === "true" ? true : false);

  const changeMode = () => {
    let prevDark = dark;
    setDark(!prevDark)

    localStorage.dark = !prevDark;
  }
  return (
    <div className={`App ${dark ? 'bg-dark' : 'bg-white'}`}>
      <BrowserRouter>
        <AppBar dark={dark} setDark={() => changeMode()} />
        <Routes>
          <Route path="/" element={<Home setDark={() => changeMode()} />} />
          <Route path="article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {props.modal.modalOpen && <Modal />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(App);
