import { ArrowRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import BigModal from "../modal/BigModal";

function Projects() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    const articles = document.querySelectorAll('article');
    articles.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseOut);
    })

    return () => {
      articles.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter, true);
        el.removeEventListener('mouseleave', onMouseOut, true);
      })
    }
  }, [])

  const onMouseEnter = (e) => {
    const alreadyDrag = document.getElementsByClassName("dragText")[0];
    if (alreadyDrag) return;

    const cursor = document.getElementsByClassName("cursor")[0];
    const dragText = document.createElement("span");
    const containerMarquee = document.createElement("div");
    containerMarquee.classList.add("marquee");
    dragText.classList.add("dragText");
    dragText.innerText = "Click";

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

  return (
    <section className="conclusion relative z-10" id="section-4">
      <div
        className="next-screen"
        style={{ background: "var(--bg-color-alt)" }}
      >
        <div className="screen-padding md:px-20 px-4">
          <h2 className="title font-bold text-3xl text-white">
            Derniers projets.
          </h2>
          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-y-9 gap-6"
            style={{ marginTop: "50px" }}
          >
            <article
              onClick={() => {
                setId(4);
                setOpen(true);
              }}
              className="px-4"
            >
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/next-music-app.png")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  2022{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [Next Music App] <br /> Application web de musique créée en
                  cours de dev.
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>
            <article className=" px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/sp.png")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  En cours - 2021{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [Sports Field] <br /> Site d'information sportif et de live
                  score.
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>

            <a href="https://infans.fr" target="_blank">
              <article className=" px-4">
                <div className="mb-5">
                  <img
                    width="640"
                    height="283"
                    className="object-cover"
                    src={require("../../image/carte-formassmat.png")}
                  />
                </div>
                <div className="mb-4">
                  <span
                    className="block mb-4 text-sm"
                    style={{ fontWeight: "300", color: "white" }}
                  >
                    {" "}
                    2020{" "}
                  </span>

                  <h2
                    style={{
                      fontWeight: "500",
                      fontSize: "17px",
                      color: "white",
                    }}
                  >
                    [Infans] <br /> Carte Form'assmat.
                  </h2>
                </div>
                <ArrowRightIcon className="h-5 text-white" />
              </article>
            </a>

            <article
              onClick={() => {
                setId(2);
                setOpen(true);
              }}
              className=" px-4"
            >
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/Logo-gsb.png")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  2019 - 2020{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [BTS SIO] <br /> Cas GSB (site et mobile)
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>

            <article
              onClick={() => {
                setId(1);
                setOpen(true);
              }}
              className="  px-4"
            >
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/formassmat.jpg")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  2020{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [Infans] <br /> Refonte du site formassmat.
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>

            <article className="  px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/infomag-mockup.png")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  2019{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [Infomag] <br />
                  Site d'actualité
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>

            <article className="  px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src={require("../../image/unprojetpourunsourire.png")}
                />
              </div>
              <div className="mb-4">
                <span
                  className="block mb-4 text-sm"
                  style={{ fontWeight: "300", color: "white" }}
                >
                  {" "}
                  2018{" "}
                </span>

                <h2
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    color: "white",
                  }}
                >
                  [BTS SIO] <br /> Un projet pour un sourire.
                </h2>
              </div>
              <ArrowRightIcon className="h-5 text-white" />
            </article>
          </div>
        </div>
      </div>
      <BigModal id={id} onClose={() => setOpen(false)} isOpen={open} />
    </section>
  );
}

export default Projects;
