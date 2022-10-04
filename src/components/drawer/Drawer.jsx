import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useCycle } from "framer-motion";

const Drawer = (props) => {

    const { cursorRef } = props;
    const buttonDrawer = useRef();
    const node = useRef();

    useEffect(() => {

        buttonDrawer.current.addEventListener('mouseover', e => {
            cursorRef.current.classList.add('is-clickable');
        });

        buttonDrawer.current.addEventListener('mouseleave', e => {
            cursorRef.current.classList.remove('is-clickable');
        });

        node.current.addEventListener('mouseover', e => {
            cursorRef.current.classList.add('is-clickable');
        })

        node.current.addEventListener('mouseleave', e => {
            cursorRef.current.classList.remove('is-clickable');
        });

        return () => {

        }
    }, []);

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const closeDrawer = () => {
        const drawer = document.getElementsByClassName('drawer')[0];
        drawer.classList.remove('open');
        document.body.style.overflow = "auto";
    }

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            if (e.which === 1) {
                closeDrawer();
            }
        }
    };

    return (
        <div className='drawer'>
            <div className='relative h-full'>
                <div className='relative'>
                    <button ref={buttonDrawer} onClick={() => closeDrawer()} style={{ background: "none", border: "unset", color: "unset", height: "16px", padding: "10px", width: "96px" }} className='close-drawer'>
                        <span />
                        <span />
                    </button>
                </div>
                <div className='relative z-20 right-0 pt-20 h-full'>
                    <div className='px-5'>
                        <ul>
                            <li style={{ "--i": 0 }} className='block w-full text-right'><a>A proppos</a></li>
                            <li style={{ "--i": 1 }} className='block w-full text-right'><a>Compétences</a></li>
                            <li style={{ "--i": 2 }} className='block w-full text-right'><a>Expérience</a></li>
                            <li style={{ "--i": 3, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>WeCount</a></li>
                            <li style={{ "--i": 4, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Egiteko</a></li>
                            <li style={{ "--i": 5, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Infans</a></li>
                            <li style={{ "--i": 6, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Cas GSB</a></li>
                            <li style={{ "--i": 7, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Infomag</a></li>
                            <li style={{ "--i": 8, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Un projet pour un sourire</a></li>
                            <li style={{ "--i": 9 }} className='block w-full text-right'><a>Projets</a></li>
                        </ul>
                        <ul className='mt-10'>
                            <li style={{ "--i": 10, fontSize: ".9375rem", fontWeight: "normal" }} className='block w-full text-right'><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <span className='drawer-bg'></span>
                <div ref={node} className='backdrop'></div>
            </div>
        </div>
    )
}

export default Drawer