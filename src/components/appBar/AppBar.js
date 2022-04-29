import { ChatIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { openModal } from '../../store-redux/modalActions';
import Sidebar from '../sidebar/Sidebar';

function AppBar(props) {


    return (
        <>
            <div className='hidden md:block'
                style={{
                    width: '100%',
                    position: 'fixed',
                    zIndex: '20',
                    transition: '0.7s',
                    top: "0",
                    backdropFilter: "blur(5px)",
                    background: "#10101080",
                    borderBottom: "1px solid #1e1e1e"
                }}>
                <div className="app-bar">
                    <div className="logo-container">
                        <Link to="/" >
                            <h2>FE</h2>
                        </Link>
                    </div>

                    <div className="nav-container">
                        <Scrollspy
                            items={['section-1', 'section-2', 'section-3', 'section-4']}
                            currentClassName="active"
                            className='nav'
                        >
                            <li className="nav-item">
                                <a href="#section-1">
                                    A propos
                                </a>
                            </li >

                            <li className="nav-item">
                                <a href="#section-2">
                                    Compétences
                                </a>
                            </li >

                            <li className="nav-item">
                                <a href="#section-3">
                                    Expériences
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#section-4">
                                    Projets
                                </a>
                            </li>
                        </Scrollspy>
                    </div>

                    <div>
                        <button className="shadow-md flex space-x-2" onClick={() => {
                            let data = {
                                modalOpen: true,
                                modalRequired: false,
                                modalTitle: "Discutons."
                            }

                            props.openModal(data);
                        }}>
                            <span>Discutons</span>
                            <ChatIcon className="h-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <Sidebar dark={props.dark} setDark={() => props.setDark()} />
            </div>
        </>
    )
}


export default connect(null, { openModal })(AppBar);