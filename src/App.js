import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
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
import Drawer from './components/drawer/Drawer';
import { Scrollbars } from 'react-custom-scrollbars-2';

function App(props) {
  const [dark, setDark] = useState(true);
  const cursor = useRef();


  useEffect(() => {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(el => {
      el.addEventListener('mouseover', e => {
        cursor.current.classList.add('is-clickable');
      });

      el.addEventListener('mouseleave', e => {
        cursor.current.classList.remove('is-clickable');
      })
    })

    document.body.addEventListener('mousemove', e => {
      cursor.current.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    });

  }, []);


  return (

    <div className={`App ${dark ? 'bg-dark' : 'bg-white'}`}>
        <BrowserRouter>
          <AppBar cursorRef={cursor} />
          <Drawer cursorRef={cursor} />
          <Routes>
            <Route path="/" element={<Home setDark={() => console.log('test')} />} />
            <Route path="article/:id" element={<Article />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {props.modal.modalOpen && <Modal />}
        <div ref={cursor} className="cursor"></div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(App);
