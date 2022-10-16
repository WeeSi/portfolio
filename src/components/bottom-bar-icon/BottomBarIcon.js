import React from 'react'
import ScrollIndicator from '../scroll-indicator/ScrollIndicator'

function BottomBarIcon(props) {
    return (
        <div className='hidden md:block'>
            <div className="bottom-bar-icons md:px-20 px-4 pb-3">
                <ScrollIndicator />
            </div>
        </div>
    )
}

export default BottomBarIcon;
