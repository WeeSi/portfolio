import "./transition.scss";
import gsap, { Power4 } from "gsap";
import { useEffect, useRef, useState } from "react";

const Transition = ({ timeline, children }) => {
  const trans = useRef(null);
  const [reversed, setReversed] = useState(false);
  const content = gsap.timeline({ defaults: { ease: "power2.out" } });

  useEffect(() => {
    timeline.fromTo(
      trans.current,
      {
        duration: 1.8,
        y: "100%",
      },
      { y: "-100%", duration: 1.8 }
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
