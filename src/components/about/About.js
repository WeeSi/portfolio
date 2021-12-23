import React from 'react'
import BottomBarIcon from '../bottom-bar-icon/BottomBarIcon'

export default function About(props) {
    return (
        <div className="about f-height screen-padding no-pd-top no-pd-bot">
            <div className="flex-container">
                <div className="image-me">
                    <img src="https://franckehui.fr/img/296bd6fc2ffdb7bd59d0b683185b6998_burned.png" alt="" className="about-img" />

                </div>
            </div>
            <div className="flex-container">
                <div>
                    <h1 className="desc-me font-bold text-xxl mb-10">Je suis créateur d'application mobile, web et logiciel.</h1>
                    <div className="mb-10">
                        <p style={{ color: "#cdcbdf" }} className="wow fadeInUp text-xl">
                            Passionné depuis toujours d’informatique j’ai décidé d’en faire mon métier.
                            Je suis actuellement en 3eme année d'école d'ingénieur informatique en alternance chez Egiteko.
                        </p>
                    </div>
                    <div className="about-btns">
                        <button data-toggle="modal" type="button" data-target="#myModal" className="site-btn">Mes projets</button>
                    </div>
                </div>
            </div>
            <BottomBarIcon setDark={props.setDark} />
        </div>
    )
}
