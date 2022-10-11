import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Transition from "./Transition";
import gsap, { Power4 } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { DataArticles } from "./DataArticle";
import SetCursorPoint from "./hooks/SetCursorPoint";

const Article = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);

  let { id } = useParams();
  const content = gsap.timeline({ defaults: { ease: "power2.out" } });

  const data = DataArticles.find((el) => el.id === parseInt(id));
  const { images, year, type, role, desc } = data;

  return (
    <Transition timeline={content}>
      <AnimatePresence>
        {isVisible && index !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: "99999999999" }}
          >
            <div className="min-h-full">
              <div
                style={{ minHeight: "inherit" }}
                className="w-full min-h-screen"
              >
                <div
                  className={`transform transition-all min-h-screen"`}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div style={{ padding: "0px 80px !important" }}>
                    <Gallery
                      setIndex={setIndex}
                      index={index}
                      images={images}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bottom-0 absolute w-full grid sm:grid-cols-12 grid-cols-2"
              style={{
                padding: "10px 45px",
                color: "var(--text-color)",
                fontSize: "11px",
              }}
            >
              <div className="sm:col-span-4 relative">
                <div className="sm:absolute bottom-0">
                  <span className=" block uppercase">© FRANCK EHUI</span>
                  <span className=" block uppercase">OCTOBRE 2022</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className=" block uppercase">Année</span>
                <span className=" block uppercase">Type</span>
                <span className=" block uppercase">Role</span>
              </div>
              <div className="sm:col-span-3 sm:text-left text-right">
                <span className=" block uppercase">{year}</span>
                <span className=" block uppercase">{type}</span>
                <span className=" block uppercase">{role}</span>
              </div>

              <div className="sm:col-span-3 relative">
                <span
                  className=" block sm:absolute bottom-0 uppercase"
                  style={{ maxWidth: "200px" }}
                >
                 {desc}
                </span>
              </div>

              <div className="text-right">
                <a>
                  {" "}
                  <span className=" block uppercase">Github</span>
                </a>
                <a>
                  {" "}
                  <span className=" block uppercase">Instagram</span>
                </a>
                <a>
                  {" "}
                  <span className=" block uppercase">Linkedin</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Transition>
  );
};

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = ({ images, index, setIndex }) => {
  const [[page, direction], setPage] = useState([index, 0]);
  const [top, setTop] = useState(0);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    if (page + newDirection < 0) {
      setIndex(images.length - 1);
      return setPage([images.length - 1, Math.abs(newDirection)]);
    }

    if (page + newDirection >= images.length) {
      setPage([0, newDirection * -1]);
      return setIndex(0);
    }

    setPage([page + newDirection, newDirection]);
    setIndex(page + newDirection);
  };

  const paginateClick = (newIndex, e) => {
    let marge = 0;
    newIndex >= 1 ? (marge = 16) : (marge = marge);

    for (var i = 0; i < images.length; i++) {
      if (index + i === newIndex) {
        setPage([page + i, i]);
        setIndex(page + i);
        setTop(e.target.offsetTop - marge);
        return;
      }
    }

    for (var i = images.length - 1; i >= 0; i--) {
      if (index - i === newIndex) {
        setPage([page - i, -i]);
        setIndex(page - i);
        setTop(e.target.offsetTop - marge);
        return;
      }
    }
  };

  useEffect(() => {
    const imagesButton = document.querySelectorAll(".image-button");
    const cursor = document.getElementsByClassName("cursor")[0];

    imagesButton.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        cursor.classList.add("is-clickable");
      });

      el.addEventListener("mouseout", (e) => {
        cursor.classList.remove("is-clickable");
      });
    });
    return () => {};
  }, []);

  return (
    <div
      style={{ minHeight: "inherit" }}
      className="close-ref sm:px-11"
    >
      <SetCursorPoint />
      <div
        style={{ width: "100%", flexGrow: 1, height: "calc(100vh)" }}
        className="close-ref w-full relative justify-center items-center flex"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={require(`./image/${images[imageIndex].src}`)}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            className="absolute"
            style={{ maxHeight: "54.16667vh" }}
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>

      <div
        style={{
          height: "65vh",
          right: "44px",
          transform: "translate(0,-50%)",
          width: "8.88889vh",
          top: "50%",
        }}
        className="hidden sm:block justify-center absolute space-y-4 content-image-button overflow-auto "
      >
        {images.map((el, i) => {
          return (
            <div
              onClick={(e) => paginateClick(i, e)}
              className={`w-full image-button`}
              style={{ height: "5vh", flex: "0 0 auto" }}
              key={el.src}
            >
              <div
                style={{
                  backgroundImage: `url(${require(`./image/${el.src}`)})`,
                  paddingTop: "calc(100%/1))",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  height: "-webkit-fill-available",
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div
        className="absolute hidden sm:block"
        style={{
          marginTop: index !== 0 ? "1rem" : 0,
          transition: "all ease 0.5s",
          top: "calc(17.5vh - 6px)",
          right: "38px",
          width: "calc(8.88889vh + 12px)",
          height: "calc(5vh + 12px)",
          borderWidth: "1.34px",
          margin: "0",
          transform: `translate3d(0px, ${top}px, 0px)`,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};
export default Article;
