import React from 'react'
import DarkModeSwitcher from '../dark-mode-switcher/DarkModeSwitcher'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

function BottomBarIcon(props) {
    return (
        <div className="screen-padding bottom-bar-icons">
            <div className="flex space-x-2 items-center">
                <div style={{ background: "#ededed" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                    <i className="fab text-black fa-facebook"></i>
                </div>

                <div style={{ background: "#ededed" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                    <i className="fab text-black fa-github-alt"></i>
                </div>

                <div style={{ background: "#ededed" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                    <i className="fab text-black fa-linkedin-in"></i>
                </div>

                <div style={{ background: "#ededed" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                    <i className="fab text-black fa-instagram"></i>
                </div>
            </div>
            <ScrollIndicator />
            <DarkModeSwitcher setDark={props.setDark} />
        </div>
    )
}

export default BottomBarIcon;
