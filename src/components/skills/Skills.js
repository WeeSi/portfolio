import React from 'react'
import Slider from "react-slick";

function Skills() {

    const settings = {
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        dots: false,
        speed: 1500,
        infinite: true,
    };

    return (
        <div className="bg-alt skills next-screen">
            <div className="screen-padding">
                <h1 className="title font-bold text-3xl text-white">Compétence.</h1>
            </div>
            <Slider {...settings} style={{ position: 'relative', zIndex: '1', marginTop: '50px' }}>
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
    )
}

export default Skills
