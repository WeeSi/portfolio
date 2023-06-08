import { XIcon } from "@heroicons/react/outline";
import { useAnimation } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { DataArticles } from "../../DataArticle";
import Portal from "../portal/Portal";

const BigModal = ({ isOpen, onClose, onOpen, id }) => {
  const node = useRef();
  const container = useRef();
  const modal = useRef();

  useEffect(() => {
    // add when mounted
    if (isOpen && id) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("wheel", wheel);
      //   document.getElementsByClassName("App")[0].style.transition =
      //     "all ease 0.5s";
      //   document.getElementsByClassName("App")[0].style.transform =
      //     "scale(0.98, 0.98)";
      window.scroll = (e) => {
        console.log(e);
      }
    }

    // return function to be called when unmounted
    return () => {
      if (isOpen && id) {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("wheel", wheel);
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        // document.getElementsByClassName("App")[0].style.transition =
        //   "all ease 0.5s";
        document.getElementsByClassName("App")[0].style.transform = "unset";
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id]);

  const wheel = (e) => {
    const width = parseFloat(modal.current.style.width.replace("%", ""));
    const height = parseInt(modal.current.style.height.replace("%", ""));
    const borderTopLeftRadius = parseInt(
      modal.current.style.borderTopLeftRadius.replace("px", "")
    );
    const borderTopRightRadius = parseInt(
      modal.current.style.borderTopRightRadius.replace("px", "")
    );
    const direction = e.deltaY;
    const containerScrollTop = container.current.scrollTop;

    if (
      width >= 97 &&
      width < 100 &&
      height >= 94 &&
      height < 100 &&
      direction === 100
    ) {
      modal.current.style.transition = `all ease 0.2s`;
      modal.current.style.width = `${width + 0.5}%`;
      modal.current.style.height = `${height + 1}%`;
      modal.current.style.borderTopLeftRadius = `${borderTopLeftRadius - 3}px`;
      modal.current.style.borderTopRightRadius = `${borderTopRightRadius - 3
        }px`;
    }

    if (
      width > 97 &&
      height > 94 &&
      direction === -100 &&
      containerScrollTop < 300
    ) {
      modal.current.style.transition = `all ease 0.2s`;
      modal.current.style.width = `${width - 0.5}%`;
      modal.current.style.height = `${height - 1}%`;
      modal.current.style.borderTopLeftRadius = `${borderTopLeftRadius + 3}px`;
      modal.current.style.borderTopRightRadius = `${borderTopRightRadius + 3
        }px`;
    }
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      onClose();
    }
  };

  if (!id && !isOpen) return null;

  const data = DataArticles.find((el) => el.id === parseInt(id));
  const { images, year, type, role, desc, title, url } = data;

  return (
    <Portal>
      <div
        className="fixed top-0"
        style={{
          height: "100vh",
          width: "100%",
          top: "0",
          pointerEvents: isOpen ? "all" : "none",
          zIndex: 999999
        }}
      >
        <div className="h-full w-full flex justify-center">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={modal}
                className="modal"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--bg-color-alt)",
                  width: "97%",
                  height: "94vh",
                  position: "fixed",
                  bottom: 0,
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                  zIndex: "9999999999999",
                }}
              >
                <div className="fixed right-28 top-16" style={{ zIndex: 99 }}>
                  <div
                    className="flex justify-center items-center close-big-modal overflow-hidden"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "white",
                      borderRadius: "999999px",
                      color: "black",
                      zIndex: 99,
                    }}
                    onClick={() => onClose()}
                  >
                    <span
                      className="relative text text-md"
                      style={{ fontWeight: "600" }}
                    >
                      Close
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    background: "white",
                    borderRadius: "999999px",
                    color: "black",
                    zIndex: 99,
                  }}
                  className="fixed bottom-5 rounded-full fixed right-14 top-16 flex justify-center items-center"
                  onClick={() => window.open(url, '_blank').focus()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
                <div
                  ref={container}
                  className="hide-scroll px-8 py-8 h-full overflow-y-auto"
                >
                  <div className="flex space-x-4 flex-col md:flex-row">
                    <div className="images-project" style={{ width: "60vw" }}>
                      <div className="space-y-4">
                        {images.map((el) => {
                          return (
                            <div>
                              {(el.type !== "video" || !el.type) && (
                                <img alt={el.title} loading="lazy" src={require(`../../image/${el.src}`)} />
                              )}
                              {
                                el.type === "video" && (
                                  <video
                                    autoPlay={true}
                                    muted="muted"
                                    loop
                                  >
                                    <source src={require(`../../videos/${el.src}`)} type="video/mp4"></source>
                                  </video>
                                )
                              }
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "sticky",
                        top: "0px",
                        alignSelf: "flex-start",
                        width: "40vw",
                        padding: "90px 130px",

                      }}
                      className="desc-project"
                    >
                      <h1
                        style={{ borderBottom: "0.1rem solid #303030" }}
                        className="pb-10"
                      >
                        {title}
                      </h1>
                      <div style={{ maxHeight: "35vh", overflowY: "scroll" }} className="custom-scroll-bar mt-4 mb-4">
                        <div>
                          <span className="text-sm">{desc}</span>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <span style={{ color: "var(--text-color)", fontSize: "13px" }} className="block uppercase">Année: {year}</span>
                        <span style={{ color: "var(--text-color)", fontSize: "13px" }} className=" block uppercase">Type: {type}</span>
                        <span style={{ color: "var(--text-color)", fontSize: "13px" }} className=" block uppercase">Role: {role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          ref={node}
          className={`backdrop ${isOpen ? "open" : "close"}`}
        ></div>
      </div>
    </Portal>
  );
};

function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}

export default BigModal;
