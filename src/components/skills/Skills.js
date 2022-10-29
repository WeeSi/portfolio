import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

function Skills() {
  const container = useRef();
  const customSlider = useRef();

  useEffect(() => {
    if (container.current) {
      container.current.addEventListener("mouseover", onMouseOver);
      container.current.addEventListener("mouseleave", onMouseOut);
    }

    return () => {
      if (container.current) {
        container.current.removeEventListener("mouseout", onMouseOut, true);
        container.current.removeEventListener("mouseleave", onMouseOver, true);
      }
    };
  }, []);

  const onMouseOver = (e) => {
    const alreadyDrag = document.getElementsByClassName("dragText")[0];
    if (alreadyDrag) return;

    const cursor = document.getElementsByClassName("cursor")[0];
    const dragText = document.createElement("span");
    const containerMarquee = document.createElement("div");
    containerMarquee.classList.add("marquee");
    dragText.classList.add("dragText");
    dragText.innerText = "Drag";

    containerMarquee.appendChild(dragText);

    cursor.appendChild(containerMarquee);
    cursor.classList.add("is-clickable");
  };

  const onMouseOut = (e) => {
    const cursor = document.getElementsByClassName("cursor")[0];
    const dragText = document.getElementsByClassName("dragText")[0];
    const containerMarquee = document.getElementsByClassName("marquee")[0];

    containerMarquee.remove();
    dragText.remove();
    cursor.classList.remove("is-clickable");
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    speed: 1800,
    infinite: true,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <section id="section-2">
      <div className="bg-alt skills next-screen md:mt-0 mt-10">
        <div className="screen-padding md:px-20 px-4">
          <h1 className="title font-bold text-3xl text-white">Compétence.</h1>
        </div>
        <div ref={container} className="relative skills-slider-content">
          <Slider
            ref={(slider) => (customSlider.current = slider)}
            {...settings}
            style={{
              position: "relative",
              zIndex: "1",
              marginTop: "50px",
              userSelect: "none",
            }}
          >
            <div>
              <img
                width="150"
                style={{ margin: "auto", filter: "invert(1)" }}
                src={require("../../image/unrealengine.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/mongodb.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/node.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/react.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/angular.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/C++.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/css.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/git.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/html5.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/ionic.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/php.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/sass.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/vuejs.png")}
              />
            </div>
            <div>
              <img
                width="150"
                style={{ margin: "auto" }}
                src={require("../../image/nestjs.png")}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Skills;
