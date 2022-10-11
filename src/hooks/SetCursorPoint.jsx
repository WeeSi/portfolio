import { useEffect } from "react";

const SetCursorPoint = () => {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a");
    const cursor = document.getElementsByClassName("cursor")[0];

    allLinks.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        cursor.classList.add("is-clickable");
      });

      el.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("is-clickable");
      });
    });
  }, []);

  return <></>;
};

export default SetCursorPoint;
