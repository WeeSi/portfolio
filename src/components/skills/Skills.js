import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React, { useRef } from 'react'
import Slider from "react-slick";

function Skills() {

    const customSlider = useRef();

    const settings = {
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
        dots: false,
        speed: 1800,
        infinite: true,
    };

    return (
        <div className="bg-alt skills next-screen">
            <div className="screen-padding">
                <h1 className="title font-bold text-3xl text-white">Compétence.</h1>
            </div>
            <div className='relative skills-slider-content'>
                <div className='absolute z-10 slider-button button-left'>
                    <div onClick={() => customSlider.current.slickPrev()} className='flex items-center justify-center' style={{ borderRadius: "999px", border: "1px solid white", width: "50px", height: "50px" }}>
                        <ArrowLeftIcon className='text-white h-5' />
                    </div>
                </div>

                <div className='absolute z-10 slider-button button-right'>
                    <div onClick={() => customSlider.current.slickNext()} className='flex items-center justify-center' style={{ borderRadius: "999px", border: "1px solid white", width: "50px", height: "50px" }}>
                        <ArrowRightIcon className='text-white h-5' />
                    </div>
                </div>
                <Slider ref={slider => (customSlider.current = slider)} {...settings} style={{ position: 'relative', zIndex: '1', marginTop: '50px' }}>
                    <div>
                        <img  width="150" style={{ margin: "auto", filter:"invert(1)" }} src={require('../../image/unrealengine.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/mongodb.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/node.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/react.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/angular.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/C++.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/css.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/git.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/html5.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/ionic.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/php.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/sass.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/vuejs.png')} />
                    </div>
                    <div>
                        <img width="150" style={{ margin: "auto" }} src={require('../../image/nestjs.png')} />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Skills
