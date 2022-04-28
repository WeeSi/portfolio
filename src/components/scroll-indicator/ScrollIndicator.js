import { ArrowDownIcon } from '@heroicons/react/outline';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function ScrollIndicator() {
    return (
        <div className="relative">
            <div className="js-scroll icon-long-arrow-down relative">

            <Link to="#skills">
                <div className="absolute scroll-down" style={{ top: "-20px", left: "-4px", zIndex:"2" }}>
                    <ArrowDownIcon className="h-6" />
                </div>
                </Link>
            </div>
        </div>

    )
}

export default ScrollIndicator;
