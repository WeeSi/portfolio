import React , { useState, useEffect } from 'react'

export default function AppBar() {


    return (
        <div  style={{ width: '100%',position:'absolute',zIndex:'1',transition:'0.7s' }}>
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
                          <button>Parlons</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
