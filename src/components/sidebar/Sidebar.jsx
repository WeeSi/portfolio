import React, { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../../hooks/useDimensions";

const data = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const node = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      toggleOpen(false);
    }
  };

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={{ height: isOpen ? "" : "fit-content" }}
      >
        <>
          <motion.div
            variants={data}
            className="fixed inset-0 transition-opacity"
          >
            {" "}
            <div className="modal-backdrop absolute inset-0 opacity-80 cursor-pointer"></div>
          </motion.div>
          <motion.div
            ref={node}
            className="shadow-lg background-nav"
            variants={data}
          /> 
          <Navigation
            closeSideBar={() => {
              toggleOpen(false);
            }}
            isOpen={isOpen}
          />
          <MenuToggle toggle={() => toggleOpen()} />
        </>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
