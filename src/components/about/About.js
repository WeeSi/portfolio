import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import BottomBarIcon from '../bottom-bar-icon/BottomBarIcon'

export default function About(props) {
    return (
        <section id="section-1">
            <div className="about md:flex md:h-screen md:px-20 px-4 screen-padding">
                <div className="md:w-3/6 px-3">
                    <div className="image-me relative">
                        <img src={require('../../image/296bd6fc2ffdb7bd59d0b683185b6998_burned.png')} alt="" className="about-img" />
                    </div>
                </div>
                <div className="md:w-3/6 px-3">
                    <div>
                        <h1 className="desc-me font-bold text-4xl mb-10">Je suis créateur d'application mobile, web et logiciel.</h1>
                        <div className="mb-10">
                            <p style={{ color: "var(--text-color)" }} className="wow fadeInUp text-xl">
                                Passionné depuis toujours d’informatique j’ai décidé d’en faire mon métier.
                                Je suis actuellement en dernière année d'école d'ingénieur informatique en alternance chez WeCount.
                            </p>
                        </div>
                        <a className="about-btns flex items-center space-x-2 animate">
                            <span style={{padding:"0", fontSize:".9375rem", fontWeight:"600"}}>Mes projets</span>
                            <ChevronRightIcon className='inline h-4' />
                        </a>
                    </div>
                </div>
                <BottomBarIcon setDark={props.setDark} />
            </div>
        </section>
    )
}
