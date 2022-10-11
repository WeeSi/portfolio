import "./transition.scss";
import { Power4 } from "gsap";
import { useEffect, useRef } from "react";

const Transition = ({ timeline, children }) => {
  const trans = useRef(null);

  useEffect(() => {
    timeline.fromTo(
      trans.current,
      {
        duration: 1,
        opacity: 1,
      },
      { opacity: 0, duration:1}
    );

    timeline.fromTo(
      ".article-content",
      {
        opacity: 0,
        duration: 0.2,
      },
      { opacity: 1, duration: 0.2 }
    );

    return () => {};
  }, []);

  return (
    <div>
      <div ref={trans} className="transition-effect"></div>
      {children}
    </div>
  );
};

export default Transition;
