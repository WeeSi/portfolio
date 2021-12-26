import { ArrowDownIcon } from '@heroicons/react/outline';
import React from 'react'

function ScrollIndicator() {
    return (
        <div className="relative">
            <div className="js-scroll icon-long-arrow-down relative">

                <div className="absolute scroll-down" style={{ top: "-20px", left: "-4px", zIndex:"2" }}>
                    <ArrowDownIcon className="h-6" />
                </div>
            </div>
        </div>

    )
}

export default ScrollIndicator;
