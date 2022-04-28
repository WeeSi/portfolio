import React from 'react'
import { HashLink } from 'react-router-hash-link'
import BottomBarIcon from '../bottom-bar-icon/BottomBarIcon'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

export default function About(props) {
    return (
        <div id="about" className="about md:flex md:h-screen md:px-20 px-4 screen-padding">
            <div className="md:w-3/6 px-3">
                <div className="image-me relative">
                    <img src="https://franckehui.fr/img/296bd6fc2ffdb7bd59d0b683185b6998_burned.png" alt="" className="about-img" />
                </div>
            </div>
            <div className="md:w-3/6 px-3">
                <div>
                    <h1 className="desc-me font-bold md:text-xxl text-3xl mb-10">Je suis créateur d'application mobile, web et logiciel.</h1>
                    <div className="mb-10">
                        <p style={{ color: "var(--text-color)" }} className="wow fadeInUp md:text-xl text-lg">
                            Passionné depuis toujours d’informatique j’ai décidé d’en faire mon métier.
                            Je suis actuellement en 4eme année d'école d'ingénieur informatique en alternance chez Egiteko.
                        </p>
                    </div>
                    <div className="about-btns flex justify-center md:block hidden">
                        <HashLink to="#projects">
                            <button className="shadow-md site-btn">Mes projets</button>
                        </HashLink>
                    </div>
                    <div className="mt-16 about-btns flex justify-center md:hidden block">
                        <ScrollIndicator />
                    </div>
                </div>
            </div>
            <div className="hidden md:block"> <BottomBarIcon setDark={props.setDark} /></div>
        </div>
    )
}
