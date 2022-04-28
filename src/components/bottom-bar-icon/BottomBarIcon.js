import React from 'react'
import DarkModeSwitcher from '../dark-mode-switcher/DarkModeSwitcher'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

function BottomBarIcon(props) {
    return (
        <div className="screen-padding bottom-bar-icons md:px-20 px-4">
            <div className="flex space-x-2 items-center">

                <a href="https://github.com/WeeSi" target="_blank">
                    <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                        <i className="fab text-black fa-github-alt"></i>
                    </div>
                </a>

                <a href="https://dribbble.com/Weesii" target="_blank">
                    <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                        <i className="fab text-black fa-dribbble"></i>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/franck-ehui-386505170" target="_blank">
                    <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                        <i className="fab text-black fa-linkedin-in"></i>
                    </div>
                </a>

                <a href="https://www.instagram.com/franckwiiseegoht" target="_blank">
                    <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                        <i className="fab text-black fa-instagram"></i>
                    </div>
                </a>
            </div>
            <ScrollIndicator />
            <DarkModeSwitcher setDark={props.setDark} />
        </div>
    )
}

export default BottomBarIcon;
