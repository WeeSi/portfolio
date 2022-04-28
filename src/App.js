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
  const [dark, setDark] = useState(true);


  return (
    <div className={`App ${dark ? 'bg-dark' : 'bg-white'}`}>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home setDark={() => console.log('test')} />} />
          <Route path="article/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {props.modal.modalOpen && <Modal />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(App);
