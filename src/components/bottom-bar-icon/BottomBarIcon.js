import React from 'react'
import DarkModeSwitcher from '../dark-mode-switcher/DarkModeSwitcher'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

function BottomBarIcon(props) {
    return (
        <div className="screen-padding bottom-bar-icons">
            <div>
                <i className="fab text-white fa-facebook"></i>
                <i className="fab text-white fa-instagram"></i>
                <i className="fab text-white fa-linkedin-in"></i>
                <i className="fab text-white fa-github-alt"></i>
            </div>
            <ScrollIndicator />
            <DarkModeSwitcher setDark={props.setDark}/>
        </div>
    )
}

export default BottomBarIcon;
