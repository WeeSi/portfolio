import React from 'react'
import Slider from "react-slick";

function Skills() {

    const settings = {
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        speed: 3000,
        infinite: true,
    };

    return (
        <div id="skills" className="bg-alt skills next-screen md:mt-0 mt-10">
            <div className="screen-padding md:px-20 px-4">
                <h1 className="title font-bold text-3xl text-white">Compétences.</h1>
            </div>
            <Slider {...settings} className="space-x-2" style={{ position: 'relative', zIndex: '1', marginTop: '50px', display: "flex", alignItems: "center" }}>
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
