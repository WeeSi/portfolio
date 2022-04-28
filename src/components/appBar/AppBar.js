import { ChatIcon } from '@heroicons/react/outline';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../store-redux/modalActions';

function AppBar(props) {


    return (
        <div 
        style={{ width: '100%', 
                 position: 'fixed', 
                 zIndex: '20', 
                 transition: '0.7s', 
                 top:"0", 
                 backdropFilter:"blur(5px)", 
                 background:"#10101080",
                 borderBottom:"1px solid #1e1e1e"
        }}>
            <div className="app-bar">
                <div className="logo-container">
                    <Link to="/" >
                    <h2>FE</h2>
                    </Link>
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
                                    modalTitle: "Discutons."
                                }

                                props.openModal(data);
                            }}>
                                <span>Discutons</span>
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