import React from 'react'

function DarkModeSwitcher(props) {
    return (
        <label className="theme-switcher" onClick={() => props.setDark()}>
            <div className="planet">
            </div>
            <div className="elements">
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
                <svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200"></circle>
                </svg>
            </div>
        </label>
    )
}

export default DarkModeSwitcher;
