import React from 'react'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

function BottomBarIcon(props) {
    return (
        <div className='hidden md:block'>
            <div className="screen-padding bottom-bar-icons md:px-20 px-4 pb-3">
                <div className="flex space-x-2 items-center">

                    <a target="_blank" href='https://github.com/WeeSi'>
                        <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                            <i className="fab text-black fa-github-alt"></i>
                        </div>
                    </a>

                    <a target="_blank" href='https://www.linkedin.com/in/franck-ehui-386505170/'>
                        <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                            <i className="fab text-black fa-linkedin-in"></i>
                        </div>
                    </a>

                    <a target="_blank" href='https://www.instagram.com/franckwiiseegoht/'>
                        <div style={{ background: "#ededed", width: "45px", height: "45px" }} className="cursor-pointer inline-flex items-center p-3 rounded-full">
                            <i className="fab text-black fa-instagram"></i>
                        </div>
                    </a>
                </div>
                <ScrollIndicator />
            </div>
        </div>
    )
}

export default BottomBarIcon;
