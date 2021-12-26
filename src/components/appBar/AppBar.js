import { ChatIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../store-redux/modalActions';

function AppBar(props) {


    return (
        <div style={{ width: '100%', position: 'absolute', zIndex: '1', transition: '0.7s', top:"0" }}>
            <div className="app-bar">
                <div className="logo-container">
                    <h2>FE</h2>
                </div>

                <div className="nav-container">
                    <ul className="nav">
                        <li className="nav-item active">
                            A propos
                        </li >
                        <li className="nav-item">
                            Compétences
                        </li >
                        <li className="nav-item">
                            Expériences
                        </li>
                        <li className="nav-item">
                            Projets
                        </li>
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
    )
}


export default connect(null, { openModal })(AppBar);