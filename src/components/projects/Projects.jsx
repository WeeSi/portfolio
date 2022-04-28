import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div
      className="next-screen mb-16"
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
          <Link to="/article/4">
          <article className="cursor-pointer px-4">
            <div className="mb-5">
              <img
                width="640"
                height="283"
                className="object-cover"
                src={require('../../image/next-music-app.png')}
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
                style={{ fontWeight: "500", fontSize: "17px", color: "white" }}
              >
                [Next Music App] <br /> Application web de musique créée en cours de dev.
              </h2>
            </div>
            <ArrowRightIcon className="h-5 text-white" />
          </article>
          </Link>
          <article className="cursor-pointer px-4">
            <div className="mb-5">
              <img
                width="640"
                height="283"
                className="object-cover"
                src={require('../../image/sports-field.png')}
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
                style={{ fontWeight: "500", fontSize: "17px", color: "white" }}
              >
                [Sports Field] <br /> Site d'information sportif et de live
                score.
              </h2>
            </div>
            <ArrowRightIcon className="h-5 text-white" />
          </article>

          <a href="https://carte.formassmat-moncompte.fr/" target="_blank">
            <article className="cursor-pointer px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src="https://franckehui.fr/img/carte-formassmat.png"
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

          <Link to="/article/2">
            <article className="cursor-pointer px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src="https://franckehui.fr/img/Logo-gsb.png"
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
          </Link>

          <Link to="/article/1">
            <article className="cursor-pointer  px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src="https://franckehui.fr/img/formassmat.jpg"
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
          </Link>

          <a href="https://infomag-site.fr/" target="_blank">
            <article className="cursor-pointer  px-4">
              <div className="mb-5">
                <img
                  width="640"
                  height="283"
                  className="object-cover"
                  src="https://franckehui.fr/img/infomag-mockup.png"
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
          </a>

          <article className="cursor-pointer  px-4">
            <div className="mb-5">
              <img
                width="640"
                height="283"
                className="object-cover"
                src="https://franckehui.fr/img/unprojetpourunsourire.png"
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
                style={{ fontWeight: "500", fontSize: "17px", color: "white" }}
              >
                [BTS SIO] <br /> Un projet pour un sourire.
              </h2>
            </div>
            <ArrowRightIcon className="h-5 text-white" />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Projects;
