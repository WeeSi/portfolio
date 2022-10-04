import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { openModal } from '../../store-redux/modalActions';
import Sidebar from '../sidebar/Sidebar';

function AppBar(props) {
    const { cursorRef } = props;
    const buttonDrawer = useRef();

    useEffect(() => {

        buttonDrawer.current.addEventListener('mouseover', e => {
            cursorRef.current.classList.add('is-clickable');
        });

        buttonDrawer.current.addEventListener('mouseleave', e => {
            cursorRef.current.classList.remove('is-clickable');
        })

        return () => {

        }
    }, []);

    const toggleDrawer = () => {
        const drawer = document.getElementsByClassName('drawer')[0];
        drawer.classList.add('open');
        document.body.style.overflow = "hidden";
    }


    return (
        <>
            <div className='hidden md:block'
                style={{
                    width: '100%',
                    position: 'fixed',
                    zIndex: '20',
                    transition: '0.7s',
                    top: "0",
                }}>
                <div className="app-bar">
                    <div className="logo-container">
                        <Link to="/" >
                            <h2>FE</h2>
                        </Link>
                    </div>

                    <button onClick={() => toggleDrawer()} ref={buttonDrawer} className='drawer-button' style={{ background: "none", border: "unset", color: "unset", height: "16px", padding: "0", width: "30px" }}>
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            <div className="md:hidden block">
                <Sidebar dark={props.dark} setDark={() => props.setDark()} />
            </div>
        </>
    )
}


export default connect(null, { openModal })(AppBar);