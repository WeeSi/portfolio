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
                <h1 className="title font-bold text-xl text-white">Compétence.</h1>
            </div>
            <Slider {...settings} style={{ position: 'relative', zIndex: '1', marginTop: '50px' }}>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/react.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/angular.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/C++.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/css.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/git.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/html5.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/ionic.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/php.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/sass.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/vuejs.png').default} />
                </div>
                <div>
                    <img width="150" style={{ margin: "auto" }} src={require('../../image/nestjs.png').default} />
                </div>
            </Slider>
        </div>
    )
}

export default Skills
