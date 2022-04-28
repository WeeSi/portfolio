import { ChatIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../store-redux/modalActions';
import Sidebar from '../sidebar/Sidebar';
import { HashLink as Link } from 'react-router-hash-link';

function AppBar(props) {


    return (
        <>
            <div className="hidden md:block" style={{ width: '100%', position: 'absolute', zIndex: 10, transition: '0.7s', top: "0" }}>
                <div className="app-bar md:flex">
                    <div className="logo-container">
                        <h2>FE</h2>
                    </div>

                    <div className="nav-container">
                        <ul className="nav flex space-x-4">
                            <Link to="/#about">
                                <li className="nav-item">
                                    A propos
                                </li >
                            </Link>

                            <Link to="/#skills">
                                <li className="nav-item">
                                    Compétences
                                </li >
                            </Link>

                            <Link to="/#exp">
                                <li className="nav-item">
                                    Expériences
                                </li>
                            </Link>

                            <Link to="/#projects">
                                <li className="nav-item">
                                    Projets
                                </li>
                            </Link>

                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className="nav-item">
                                <button className="shadow-md flex space-x-2" onClick={() => {
                                    let data = {
                                        modalOpen: true,
                                        modalRequired: false,
                                        modalTitle: "Parlons."
                                    }

                                    props.openModal(data);
                                }}>
                                    <span>Parlons</span>
                                    <ChatIcon className="h-5" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <Sidebar dark={props.dark} setDark={() => props.setDark()}/>
            </div>
        </>
    )
}


export default connect(null, { openModal })(AppBar);