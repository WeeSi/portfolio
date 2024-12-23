import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/outline";

function Experiences() {
  return (
    <section id="section-3">
      <div className="next-screen">
        <div className="screen-padding md:px-20 px-4">
          <h2 className="title font-bold text-3xl">
            Capacités & <br /> Expériences.
          </h2>
          <div style={{ marginTop: "50px" }}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-11 gap-4">
              <div>
                <div className="mb-10">
                  <p style={{ maxWidth: "400px" }}>
                    Je suis autant passioné par le design front-end que par la
                    logique back-end.
                  </p>
                </div>

                <h2 className="font-bold text-xl mb-7">Capacités</h2>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-y-8 gap-3">
                  <div>
                    <div
                      className="rounded-full p-5"
                      style={{ background: "#ededed", width: "fit-content" }}
                    >
                      <svg
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="25pt"
                        height="25pt"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path d="M2043 4959 c-478 -32 -939 -244 -1288 -594 -989 -988 -715 -2634 543 -3264 179 -89 366 -149 587 -188 139 -23 480 -24 620 0 203 35 425 106 580 185 l60 30 440 -437 c477 -474 482 -478 635 -520 89 -25 216 -27 308 -6 210 50 385 223 438 435 23 91 15 253 -16 335 -44 118 -96 177 -533 614 l-425 423 46 97 c128 275 197 597 190 898 l-3 143 287 287 c158 159 292 301 297 316 6 16 11 39 11 53 0 39 -38 103 -73 124 -36 22 -106 26 -140 9 -12 -6 -117 -106 -234 -222 -117 -116 -214 -209 -216 -207 -1 3 -20 56 -40 119 -93 284 -278 574 -508 797 -425 410 -976 611 -1566 573z m492 -329 c683 -147 1189 -644 1345 -1323 l23 -99 -151 -151 -152 -152 -267 267 c-228 226 -274 267 -305 273 -79 15 -86 9 -518 -421 l-405 -404 -180 181 c-99 99 -192 187 -207 195 -34 18 -80 18 -121 0 -18 -8 -175 -158 -354 -337 -273 -275 -323 -330 -332 -365 -30 -115 83 -216 196 -174 15 6 146 129 290 273 l263 262 172 -177 c189 -193 233 -224 301 -215 38 5 70 35 446 411 223 223 411 406 416 406 6 0 123 -113 260 -251 138 -138 262 -257 277 -265 32 -17 101 -18 131 -3 12 6 73 61 136 123 l113 111 -6 -73 c-34 -399 -279 -855 -605 -1126 -523 -436 -1252 -524 -1866 -226 -491 238 -828 672 -947 1220 -20 93 -22 133 -22 340 0 207 2 247 22 340 157 724 715 1257 1439 1375 135 22 476 14 608 -15z m1686 -3327 c452 -453 445 -445 443 -573 -2 -107 -67 -209 -168 -263 -59 -31 -193 -31 -256 0 -31 16 -169 146 -448 426 l-403 403 108 90 c61 51 152 141 208 207 55 64 102 117 105 117 3 0 188 -183 411 -407z" />
                        </g>
                      </svg>
                    </div>

                    <h2 className="mt-4"> Sens de l'analyse </h2>
                  </div>
                  <div>
                    <div
                      className="rounded-full p-5"
                      style={{ background: "#ededed", width: "fit-content" }}
                    >
                      <svg
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25pt"
                        height="25pt"
                        viewBox="0 0 512 512"
                      >
                        <path d="M354.3 1c-2.6 1-6.3 6.6-6.3 9.3 0 3.1 2.9 7.6 6 9.2 2.3 1.2 7.4 1.5 26.7 1.5h23.8L389 36.6c-8.5 8.5-33.9 33.6-56.3 55.6l-40.8 40.2-19.7-19.6c-10.8-10.8-20.7-20.1-21.9-20.7-3.7-1.9-7.8-1.3-11.9 1.8C231.2 99.2 38.1 293.4 37 296.4c-3.1 8.4 6.2 16.6 14.3 12.5 1.2-.6 45.5-44.4 98.5-97.3l96.3-96.1 20.7 21.3 20.7 21.2h9l61.2-61.2 61.2-61.2.3 25.3.3 25.3 3.3 2.9c5.6 5 13.2 3.2 16.1-3.9.8-2 1.1-13.5.9-41L439.5 6l-2.8-2.7L434 .5 395.2.3c-21.8-.1-39.7.2-40.9.7zM377.3 132.1c-1.7.5-4.1 2.1-5.2 3.5-2.1 2.6-2.1 3.3-2.1 86.9v84.2l-7.7.6c-4.3.4-8.8 1-10 1.3l-2.3.6V191.4l-3.1-3-3-2.9-22.7-.3c-20.1-.2-23.1-.1-26.2 1.5-1.9 1-4 2.9-4.7 4.3-1 1.9-1.3 20.2-1.3 80.7V350l-3.6 5.5c-4.8 7.7-9.1 18-12.1 29.4-2.1 8-2.5 11.9-2.5 23.6-.1 24.9 6.2 43.9 20.9 63.2 41 53.9 122.4 53.4 163.3-.9 19.1-25.3 25.3-58.3 16.9-88.9-2.4-8.9-10.3-25.5-15.3-32.4-4.5-6.3-15.8-17.8-21.3-21.8l-4.3-3v-93.2c0-92.4 0-93.3-2-95.8-1.2-1.5-3.8-3.1-5.8-3.7-4.5-1.2-41.5-1.2-45.9.1zM410 232.6c0 69.7-.2 80.5-1.4 80.1-.8-.3-3.3-1.1-5.5-1.6-2.3-.6-5.9-1.6-8.1-2.1l-4-1.1V152h19v80.6zM330 261v54.9l-3.2 1.7c-1.8.9-6.3 3.6-10 6L310 328V206h20v55zm63.6 69c14 3.6 24.9 9.7 35.8 19.9 24.1 22.9 31.9 57.4 20 89-7.7 20.5-26.1 38.8-46.9 46.6-34.9 13.2-73.2 1.8-96.1-28.5-4.1-5.4-11.1-20.8-12.9-28-8-33.6 5.7-68.9 33.9-87.4 20.6-13.6 43.1-17.5 66.2-11.6z" />
                        <path d="M371.4 337.9c-4.1 1.8-6.4 6-6.4 11.8 0 4.9-.2 5.4-2.7 6.4-9.5 3.4-16.9 10.6-20.3 19.7-3 7.8-2.5 19.5 1 26.7 5.1 10.5 14.5 16.9 27.2 18.6 8.3 1.2 11 2.6 13.8 7.2 5.2 8.4-.9 18.7-11 18.7-7.3 0-13-5.7-13-12.9 0-2-1.1-4.2-2.9-6.3-2.5-2.8-3.6-3.3-7.6-3.3-3.9 0-5.1.5-7.2 2.9-2.3 2.7-2.5 3.6-2.1 10.1.4 5.4 1.2 8.4 3.4 12.4 3.5 6.5 10.9 13.4 16.9 15.7 4.1 1.5 4.5 2 4.5 5.1 0 7.5 5.4 12.2 12.4 10.9 4.9-.9 7.6-4.7 7.6-10.5 0-4.4.2-4.7 4.5-7 2.5-1.3 6.2-4.2 8.1-6.4 11.8-13.1 12.1-32.7.6-45.8-4.8-5.5-13.8-9.8-22.5-10.8-8.4-1-11.9-2.8-14.1-7.6-2-4.1-2-6.6-.2-11 3-7.2 13.6-9.9 19.4-5 3.2 2.6 4.7 5.8 5.7 11.7.8 4.8 5.4 8.8 10.2 8.8 2.7 0 4.3-.8 7-3.5 3.5-3.5 3.6-3.8 3-9.5-1-11-7.5-21.5-16.2-26.1-4.2-2.2-4.5-2.7-4.5-6.4 0-6-1.8-11.3-4.4-13-2.9-2-7.6-2.7-10.2-1.6zM214.2 245.5c-6.5 2.8-6.2-1.5-6.2 103.1 0 83.2.2 95 1.5 97.9 2.8 5.7 4.3 6 30.2 6h23.5l2.9-3.3 2.9-3.2V250.4l-3.1-3-3-2.9-22.7-.2c-18.1-.2-23.4 0-26 1.2zm34.8 103V432h-20V265h20v83.5zM132.5 269.2c-1.1.6-2.8 2-3.7 3.2-1.6 2-1.8 8.1-1.8 87.4v85.4l2.8 2.8c3.8 3.8 7.8 4.3 31.3 3.8 21.3-.4 22.7-.7 25.4-6.4 2.2-4.7 2.3-165.6.1-170.9-2.6-6-4.8-6.5-29.8-6.5-14.3 0-23 .5-24.3 1.2zm34.5 91.3V432h-20V289h20v71.5zM51.4 358c-1.2.4-3.1 2.1-4.3 3.6-2.1 2.6-2.1 3.3-2.1 42.9 0 39 .1 40.3 2 42.8 3.1 3.9 7.7 4.7 28.5 4.7 21.8 0 25.8-.7 28.5-5.3 1.9-3 2-5.3 2-42 0-42.6-.1-43.1-6-46.2-2.3-1.2-7.1-1.5-24.7-1.4-12 0-22.8.4-23.9.9zM85 405v27.1l-9.7-.3-9.8-.3-.3-26.8L65 378h20v27z" />
                      </svg>
                    </div>

                    <h2 className="mt-4"> Investissement </h2>
                  </div>
                  <div>
                    <div
                      className="rounded-full p-5"
                      style={{ background: "#ededed", width: "fit-content" }}
                    >
                      <svg
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25pt"
                        height="25pt"
                        viewBox="0 0 512 512"
                      >
                        <path d="M268 1c-38 4.7-74.3 19.9-102.5 43-9.4 7.7-25.8 24.8-32.6 34-22.1 29.8-34.4 62.2-38.3 100.6l-1.3 12.9-24.3 37c-13.4 20.3-28 42.7-32.6 49.6l-8.2 12.7 32.9 16.7L94 324.1V452H219.7l14.6 30 14.7 30 93.2-46.6c51.3-25.6 93.4-47.1 93.6-47.7.1-.7-6.8-15.8-15.3-33.6s-15.4-32.5-15.3-32.5c.2-.1 4.2-3.4 8.9-7.4 69.9-58.4 89.7-157.7 47.8-239.2-15.6-30.4-37.2-54.3-65.9-73.3-22.6-14.9-47.3-24.4-76-29.2C308.7.6 278.5-.3 268 1zm38.8 30.1c46.3 5.1 86.6 27.9 114.3 64.8 39.4 52.6 43.4 126.8 9.8 182.9-13.6 22.7-28.7 38.4-52.1 54.3-6.5 4.4-11.8 8.1-11.8 8.3 0 .2 6.7 14.4 15 31.7 8.2 17.2 14.9 31.3 14.7 31.5-.7.7-132.8 66.4-133.5 66.4-.4 0-6.2-11-13-24.5L238 422H124l-.2-58.3-.3-58.2-25.7-13c-14.2-7.2-25.6-13.5-25.4-14.1.2-.6 11.9-18.6 25.9-40l25.4-38.9.7-13C128.9 92.4 213 20.8 306.8 31.1z" />
                        <path d="M319 135v15h23.5l-26.7 26.7-26.8 26.8-22.5-22.5-22.5-22.5-50 50c-27.5 27.5-50 50.5-50 51 0 1.3 19.2 20.5 20.5 20.5.6 0 18.7-17.7 40.2-39.2l39.3-39.3 22.5 22.5 22.5 22.5 37.5-37.5 37.5-37.5V195h30v-75h-75v15z" />
                      </svg>
                    </div>
                    <h2 className="mt-4">Motivation</h2>
                  </div>
                  <div>
                    <div
                      className="rounded-full p-5"
                      style={{ background: "#ededed", width: "fit-content" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25pt"
                        height="25pt"
                        fill="black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M82.9 1C68.5 2.8 52.4 8.9 40.1 17.2 32.2 22.6 18.9 37 13.6 45.8-5.1 77.2-4 116.3 16.3 146.5c12.9 19.2 33.8 33.4 57.5 39.2 9.4 2.3 30.3 2.3 40 0 13.8-3.3 28.2-10 36.7-17.1l3-2.5 9.7 9.7 9.8 9.6 6-5.9 6-6-9.6-9.6-9.7-9.7 3.8-4.8c4.6-6.1 12.8-23 14.9-30.9 13.4-50.8-17.5-103-68.4-115.4C106 .7 92.2-.2 82.9 1zm29 18.6c27 6.2 49 27.9 56.3 55.3 2.8 10.6 2.8 27.7-.1 38.4-13.1 49.4-69.4 72.4-113.6 46.5-9-5.3-21-17.3-26.3-26.3-19.6-33.2-12.1-75 17.8-99.2 18.2-14.7 42.5-20.2 65.9-14.7z" />
                        <path d="M87.9 52.1C79.8 53 70.3 57.7 64 64c-16.5 16.6-16.5 43.4 0 60 26.6 26.5 72.2 7.7 72.2-29.9 0-26.1-21.9-45.1-48.3-42zm15 18.1c4.6 1.4 12 8.3 14.2 13.3 2.5 5.3 2.5 15.6 0 21-7.2 15.9-28.7 19.8-41 7.4-14.4-14.3-6.7-39.1 13.2-42.8 4.5-.9 8.1-.5 13.6 1.1zM410.5.6c-24.2 2.8-43 11.6-59.1 27.9-15.2 15.4-24.1 34.6-26.4 56.8-1.8 18.4 1.3 34.5 10.1 51.9l3.1 6.2-2.8 18.4c-2.5 16.6-2.6 18.7-1.3 21.1 3.1 5.6 5 5.6 26.1 1l19.3-4.2 6 2.1c34.7 12.2 71.1 4.7 97-20 16.4-15.5 26-35 28.7-57.9 1.9-16.4-1.6-36.8-8.9-51.4-7.6-15.1-21.7-30.2-36.2-38.9-16-9.6-38.6-14.9-55.6-13zM437.8 20c24.8 6.9 43.5 24 52.2 48 16.8 46-13.5 95.5-62.4 102-13.2 1.8-24.1.2-40.8-5.9l-5.7-2.1-14.2 3.1c-7.7 1.7-14.3 2.8-14.6 2.6-.2-.3.5-6.5 1.6-13.8l2.2-13.3-5.1-9.8c-7-13.4-9.2-22.4-9.2-36.8 0-13.9 2.2-23.3 8.2-34.9 11.6-22.2 32.4-37.2 57.5-41.2 7.4-1.2 22.1-.2 30.3 2.1z" />
                        <path d="M412.2 54.2c-2.7 2.9-36.2 61.6-36.3 63.7-.3 3.8.4 5.7 2.7 7.8 2.5 2.3 2.5 2.3 39.5 2.3h37.1l3-3c2.4-2.5 2.9-3.6 2.5-6-.8-3.6-35.1-63.8-37.5-65.6-2.8-2.2-8.6-1.7-11 .8zm15.6 39.9c5.1 8.9 9.1 16.4 8.9 16.6-.2.2-8.8.2-19 .1l-18.7-.3 9.3-16.2c5-9 9.4-16.3 9.7-16.3.3 0 4.7 7.3 9.8 16.1zM213 51.5V60h17V43h-17v8.5zM247.2 51.2l.3 8.3h17l.3-8.3.3-8.2h-18.2l.3 8.2zM282 51.5V60h17V43h-17v8.5zM246 162.7c-33.8 3.6-64.7 27.3-77.3 59.3-4.5 11.4-6.1 20.4-6.1 34 .1 26.6 9 47.8 27.8 66.6 26.7 26.6 66.2 34.3 101.6 20 21.9-8.9 42-29.3 50.9-51.7 9.1-22.8 8.8-49.3-.8-71.9-7.2-16.8-22.3-34-38-43.4-16.6-10-39-14.9-58.1-12.9zm23 17.7c46.5 8.3 74.5 55.5 59.5 100.1-2.4 7.2-8.3 18.1-13 23.9l-2.3 2.9-4.4-8.9c-5.7-11.5-8.3-15.5-16.3-25.4l-6.6-8 2.2-6.5c5.2-15.6-1.6-32.9-16.3-41.1-4.9-2.7-6.1-2.9-15.8-2.9-9.7 0-10.9.2-15.8 2.9-14.7 8.2-21.5 25.5-16.3 41.1l2.2 6.5-6.6 8c-8 9.9-10.6 13.9-16.3 25.4l-4.4 8.9-2.3-2.9c-4.7-5.8-10.6-16.7-13-23.9-5.5-16.2-5.4-32.8 0-49.1 11.8-35.6 48.8-57.6 85.5-51zm-3.9 52.9c8.4 5.7 10.2 16.5 4.1 24.8-5.1 6.9-4.6 9.3 4.4 19.1 9.4 10.3 17.4 22.2 21.9 32.5l3.4 7.8-2.2 1.7c-4.5 3.5-17.4 9.6-24.2 11.4-9.3 2.4-23.7 2.4-33 0-6.8-1.8-19.7-7.9-24.2-11.4l-2.2-1.7 3.4-7.8c4.5-10.3 12.5-22.2 21.9-32.5 9-9.8 9.5-12.2 4.4-19.1-6.1-8.3-4.3-19.1 4.1-24.8 2.6-1.7 4.8-2.3 9.1-2.3s6.5.6 9.1 2.3zM68.4 214.3c-.3.8-.4 4.7-.2 8.8l.3 7.4 8.3.3 8.2.3V213h-8c-5.8 0-8.2.4-8.6 1.3zM452.4 214.3c-.3.8-.4 4.7-.2 8.8l.3 7.4 8.3.3 8.2.3V213h-8c-5.8 0-8.2.4-8.6 1.3zM68.2 256.2l.3 8.3 8.3.3 8.2.3V248H67.9l.3 8.2zM452 256.5v8.5h17v-17h-17v8.5zM68.2 290.2l.3 8.3 8.3.3 8.2.3V282H67.9l.3 8.2zM452 290.5v8.5h17v-17h-17v8.5zM83.2 325.1c-39.7 4.6-71 32.7-80.9 72.7-2.6 10.3-2.3 31.2.5 42.6 5.4 21.4 18.8 41.2 36.8 54.3 7.1 5.2 21.6 11.8 31.4 14.4 11 3 31.6 3.2 42.9.6 36.5-8.7 63.2-35.4 71.6-71.7 2-8.9 2.3-27.7.6-36.5-2.8-14-8.5-27.3-15.9-37.5l-4.1-5.5 9.7-9.7 9.6-9.8-5.9-6-6-6-9.6 9.6-9.6 9.6-6.4-4.5c-13.1-9.1-27.6-14.7-43.4-16.6-9.9-1.2-10.8-1.2-21.3 0zm27.8 18.5c15.2 3.1 31.5 13.2 42.2 26 6.1 7.3 13.2 21.5 15.4 30.9 2.2 9.1 2.2 25.8 0 34.7-12.7 53.4-74.7 77-118.9 45.4-26.4-18.8-38.2-51.8-29.6-82.6 8.3-30.1 34.2-52.4 64.9-55.9 8.7-1 15.6-.6 26 1.5z" />
                        <path d="M59 375.6c-4.2 1.5-6 3-7 5.7-1.4 4.2-1.4 69.4.1 73.6 2.1 6 3.1 6.1 41.9 6.1 39.6 0 40.1-.1 42-6.8.8-2.5 1-15.1.8-38.4l-.3-34.8-2.8-2.7-2.7-2.8-35.3-.2c-19.3-.1-35.9 0-36.7.3zm60 42.9V444l-25.2-.2-25.3-.3-.3-25.3L68 393h51v25.5zM406.5 325.1c-14.5 1.9-29.9 7.9-42.4 16.6l-6.4 4.5-9.6-9.6-9.6-9.6-6 6-5.9 6 9.6 9.8 9.7 9.7-4.1 5.5c-11.4 15.6-17.1 34.1-17 55 .1 43.9 29.6 80.3 73.3 90.7 11.3 2.6 31.9 2.4 42.9-.6 9.8-2.6 24.3-9.2 31.4-14.4 18-13.1 31.4-32.9 36.8-54.3 2.8-11.4 3.1-32.3.5-42.6-7.6-30.8-28.3-55.1-56.1-66.3-14.2-5.8-32.8-8.3-47.1-6.4zm29.3 18.5c12.7 2.8 29.1 12.2 37.8 21.5 32 34.8 26.9 88.3-11.3 115.5-44.2 31.6-106.2 8-118.9-45.4-2.2-8.8-2.1-25.6 0-34.7 2.2-9.4 9.3-23.6 15.5-31.1 18.4-22.2 48.1-32.2 76.9-25.8z" />
                        <path d="M396.9 380.8c-10.1 7.6-19.1 14.7-19.9 15.7-1.2 1.4-1.6 5.7-1.8 20.4-.3 16.4-.1 19 1.5 21.8 1.6 2.8 30.7 25.8 37 29.1 4.9 2.7 7.1 1.6 26.4-12.9 16.3-12.2 19-14.6 20-17.8.6-2.2.9-10.5.7-21.2-.3-16-.5-17.9-2.3-20-1.1-1.2-10-8.2-19.8-15.6-12.9-9.7-18.5-13.3-20.6-13.3-2 0-7.8 3.7-21.2 13.8zm34.6 15.4 12.4 9.3.1 12.6v12.7l-12.9 9.7-13 9.6-13.1-9.8-13.1-9.8.3-12.5.3-12.5 12-9.2c6.6-5.1 12.6-9.2 13.3-9.2.7-.1 6.8 4.1 13.7 9.1zM213.7 452.7c-.4.3-.7 4.2-.7 8.5v7.8h17v-17h-7.8c-4.3 0-8.2.3-8.5.7zM247.7 452.6c-.4.4-.7 4.3-.7 8.6v7.8h18.1l-.3-8.3-.3-8.2-8-.3c-4.5-.1-8.4 0-8.8.4zM282 460.5v8.5h17.1l-.3-8.3-.3-8.2-8.2-.3-8.3-.3v8.6z" />
                      </svg>
                    </div>

                    <h2 className="mt-4">
                      {" "}
                      Conception de l'expérience utilisateur
                    </h2>
                  </div>

                  <div>
                    <div
                      className="rounded-full p-5"
                      style={{ background: "#ededed", width: "fit-content" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25pt"
                        height="25pt"
                        fill="black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M79.5 18.2C76.7 28.5 75.2 31 71.8 31c-1 0-5.9-2.3-10.9-5.2l-9.1-5.1-15.5 15.6-15.6 15.5 5.1 9.1c5.4 9.5 6 11.7 3.9 14.3-.9 1.2-18.4 6.8-21.3 6.8-.2 0-.3 10-.2 22.2l.3 22.2 10 2.8c9.7 2.7 12.5 4.4 12.5 7.7 0 .8-2.3 5.5-5.1 10.4l-5.1 9L36.5 172l15.7 15.8 9.4-5.5c8.8-5 9.6-5.3 12.1-4.1 2 1 3.1 2.6 4.1 6.3.8 2.7 2 7.4 2.9 10.2l1.4 5.3h44.5l2.8-10.4c2.4-9.3 3.1-10.6 5.5-11.6 2.9-1.2 4-.7 18.7 8.1l3 1.8 15.6-15.7 15.7-15.7-5.5-9.4c-5-8.6-5.4-9.7-4.4-12.2 1-2.4 2.4-3.1 11.6-5.5l10.4-2.8V112h48v5.6c0 3.1.5 7.5 1.2 9.8 1.6 5.5 9.9 13.8 15.4 15.4 5.9 1.7 136.9 1.7 142.8 0 5.5-1.6 13.8-9.9 15.4-15.4.7-2.3 1.2-6.7 1.2-9.9v-5.7l16.8.3 16.8.4 7.6 3.7c9.1 4.5 14.7 10.3 19.1 19.6l3.2 6.7v75l-3.2 6.7c-4.4 9.3-10 15.1-19.1 19.6l-7.6 3.7-56.8.3-56.8.3v-5.7c0-3.1-.5-7.5-1.2-9.8-1.6-5.5-9.9-13.8-15.4-15.4-5.9-1.7-136.9-1.7-142.8 0-5.5 1.6-13.8 9.9-15.4 15.4-.7 2.3-1.2 6.7-1.2 9.8v5.6h-54.3c-34.2 0-56.5.4-60.3 1.1-21.2 3.8-40.5 23.1-44.3 44.3-1.5 7.9-1.5 77.3 0 85.2 2.5 14.3 13.8 30.2 26.4 37.4 10.9 6.3 15.4 7.2 34.8 7.8l17.7.4v5.5c0 3.1.5 7.4 1.2 9.7 1.6 5.5 9.9 13.8 15.4 15.4 5.9 1.7 136.9 1.7 142.8 0 5.5-1.6 13.8-9.9 15.4-15.4.7-2.3 1.2-6.7 1.2-9.8V424l32.3.2 32.2.3.3 2.5c1.9 17.9 11.8 38 25.6 51.5 34.3 33.9 89.6 33.7 123.7-.4 34.3-34.3 34.3-89.8-.1-124.1-34.2-34.3-89.2-34.5-123.6-.5-13.8 13.5-23.7 33.6-25.6 51.5l-.3 2.5-32.2.3-32.3.2v-5.6c0-3.1-.5-7.5-1.2-9.8-1.6-5.5-9.9-13.8-15.4-15.4-5.9-1.7-136.9-1.7-142.8 0-5.5 1.6-13.8 9.9-15.4 15.4-.7 2.3-1.2 6.7-1.2 9.9v5.7l-16.7-.4c-16.4-.3-16.9-.4-23.5-3.5-9.3-4.4-15.1-10-19.6-19.1l-3.7-7.6v-83.2l3.7-7.6c4.5-9.1 10.3-14.7 19.6-19.1l6.7-3.2 56.8-.3 56.7-.3v5.7c0 3.1.5 7.5 1.2 9.8 1.6 5.5 9.9 13.8 15.4 15.4 5.9 1.7 136.9 1.7 142.8 0 5.5-1.6 13.8-9.9 15.4-15.4.7-2.3 1.2-6.6 1.2-9.7v-5.6l57.8-.3 57.7-.3 6.6-2.6c9.6-3.7 14.8-7 21.3-13.5 6.1-6.1 11.2-14.6 14.2-23.4 1.7-5 1.9-9.1 1.9-44 0-35-.2-39-1.9-44-5.3-15.7-15.3-27.4-28.9-33.9-10.4-5-16.6-6.1-34.4-6.1H424v-5.6c0-8.1-1.8-12.9-6.7-18.4-7.5-8.3-4.2-8-81.1-8-50.1 0-68.5.3-71.6 1.2-5.5 1.6-13.8 9.9-15.4 15.4-.7 2.3-1.2 6.7-1.2 9.8V96h-48V82.1l-4.2-1.1c-14.2-3.7-16.3-4.6-17.6-7.3-1.2-2.5-.9-3.3 4.1-12.1l5.5-9.4-15.7-15.6-15.7-15.7-8.8 5c-4.8 2.8-9.5 5.1-10.5 5.1-3.5 0-5.2-2.7-7.9-12.5l-2.8-10-22.1-.3-22-.2-2.8 10.2zm36.5 13c1.2 4 2.3 8 2.6 8.8.2.9 4.7 3.3 10.1 5.4 10.8 4.3 9.3 4.4 20.6-2.1l4.8-2.7 6.9 7 7 6.9-4.6 8-4.5 7.9 2.9 6.6c1.7 3.6 3.4 7.8 3.9 9.5.9 2.7 1.7 3.2 9.7 5.4l8.7 2.4-.3 10-.3 10.1-7.7 2.1c-4.3 1.1-8.1 2.5-8.6 3-.5.6-1.5 2.8-2.2 5-.7 2.2-2.4 6.2-3.7 8.8l-2.4 4.8 4.5 7.7 4.4 7.7-7 7.1-7 7.1-7.8-4.4-7.8-4.4-4.4 2.2c-2.3 1.2-6.5 2.9-9.3 3.9l-5 1.6-2.3 7.5c-1.3 4.1-2.5 8-2.7 8.6-.3.9-3.3 1.3-10.3 1.3h-9.9l-2.4-8.7c-2.2-7.9-2.7-8.7-5.4-9.6-1.6-.5-5.9-2.2-9.5-3.9l-6.6-2.9-7.9 4.5-8 4.6-6.9-7-7-6.9 2.7-4.8c6.5-11.3 6.4-9.9 2.2-20.4-2.1-5.2-3.9-9.6-4.1-9.8-.2-.2-4.1-1.4-8.6-2.6l-8.3-2.2-.3-9.9-.3-10 9-2.3c8-2.1 9-2.6 9.6-4.9.4-1.5 2.1-5.9 3.9-9.7l3.3-7.1-4.5-7.8-4.5-7.8 7.1-7 7-7.1 7.9 4.5 7.8 4.6 4.5-2.3c2.5-1.3 6.8-3.1 9.6-4l5-1.6 2.4-9 2.4-8.9h19.5l2.1 7.2zm289.5 51.3c2.5 2.4 2.5 2.6 2.5 21.5s0 19.1-2.5 21.5l-2.4 2.5H268.9l-2.4-2.5c-2.5-2.4-2.5-2.6-2.5-21.5s0-19.1 2.5-21.5l2.4-2.5h134.2l2.4 2.5zm-80 152c2.5 2.4 2.5 2.6 2.5 21.5s0 19.1-2.5 21.5l-2.4 2.5H188.9l-2.4-2.5c-2.5-2.4-2.5-2.6-2.5-21.5s0-19.1 2.5-21.5l2.4-2.5h134.2l2.4 2.5zm112 112.9c11.3 3.6 19.8 8.9 29 18.1 9.1 9.1 14.4 17.5 18.2 29 2.3 7.1 2.6 9.6 2.6 21.5s-.3 14.4-2.6 21.5c-3.8 11.5-9.1 19.9-18.2 29-9.1 9.1-17.5 14.4-29 18.2-7.1 2.3-9.6 2.6-21.5 2.6s-14.4-.3-21.5-2.6c-11.5-3.8-19.9-9.1-29-18.2-9.1-9.1-14.4-17.5-18.2-29-2.3-7.1-2.6-9.6-2.6-21.5-.1-11.8.3-14.5 2.5-21.2 3.9-11.9 9.2-20.4 18.2-29.4 11-11 23.6-17.7 38.1-20.4 8.8-1.6 25-.4 34 2.4zm-192 47.1c2.5 2.4 2.5 2.6 2.5 21.5s0 19.1-2.5 21.5l-2.4 2.5H108.9l-2.4-2.5c-2.5-2.4-2.5-2.6-2.5-21.5s0-19.1 2.5-21.5l2.4-2.5h134.2l2.4 2.5z" />
                        <path d="M94.4 57.5C74.9 61.7 60.3 77.2 57 97.2c-4 23.4 11.7 47 35.5 53.4 12.2 3.3 27 .8 38.1-6.4 9.7-6.4 15.9-14.7 19.4-26.1 5.1-16.2.8-33.8-11.2-46.6-6.8-7.3-15-12-24.5-14-8.2-1.8-11.9-1.8-19.9 0zm23.2 17.9c6.4 3 12.3 8.7 15.5 15.2 2 4.1 2.4 6.4 2.4 13.9 0 7.8-.4 9.7-2.7 14-3.2 6-8.7 11.4-14.8 14.6-3.7 2-6 2.4-13.5 2.4s-9.8-.4-13.9-2.4c-14.7-7.2-21.6-24.2-16.3-39.8 2-5.6 7.9-13 13.1-16.2 8.7-5.4 20.7-6.1 30.2-1.7zM280 104v8h16V96h-16v8zM312 104v8h16V96h-16v8zM344 104v8h16V96h-16v8zM376 104v8h16V96h-16v8zM200 256v8h16v-16h-16v8zM232 256v8h16v-16h-16v8zM264 256v8h16v-16h-16v8zM296 256v8h16v-16h-16v8zM420.8 407.7 392 436.5l-4.8-4.8c-2.6-2.6-5.2-4.7-5.8-4.7-1.3 0-10.4 9.3-10.4 10.6 0 .5 4.7 5.6 10.5 11.4l10.5 10.5 34.5-34.5c19-19 34.5-35 34.5-35.5 0-1.3-9.2-10.5-10.5-10.5-.6 0-13.9 12.9-29.7 28.7zM120 416v8h16v-16h-16v8zM152 416v8h16v-16h-16v8zM184 416v8h16v-16h-16v8zM216 416v8h16v-16h-16v8z" />
                      </svg>
                    </div>

                    <h2 className="mt-4"> Méthodologie</h2>
                  </div>
                </div>
              </div>
              <div className="about-me-info text experiences-list">
                <h2 className="font-bold text-xl mb-7">Expériences</h2>
                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">WeCount</p>
                  <p className="experiences-list-block-date">
                    2023 - Aujourd'hui
                  </p>
                  <p className="experiences-list-block-info">
                    Développeur full stack
                  </p>
                  <a
                    className="mt-3 animate space-x-1"
                    target="_blank"
                    href="https://www.wecount.io/"
                  >
                    <span className="text-xs">Voir plus</span>
                    <ChevronRightIcon className="right-chevron inline h-4" />
                  </a>
                </div>
                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">WeCount</p>
                  <p className="experiences-list-block-date">2022 - 2023</p>
                  <p className="experiences-list-block-info">
                    Junior développeur full stack en alternance
                  </p>
                  <a
                    className="mt-3 animate space-x-1"
                    target="_blank"
                    href="https://www.wecount.io/"
                  >
                    <span className="text-xs">Voir plus</span>
                    <ChevronRightIcon className="right-chevron inline h-4" />
                  </a>
                </div>

                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">Egiteko</p>
                  <p className="experiences-list-block-date">2020 - 2022</p>
                  <p className="experiences-list-block-info">
                    Junior développeur full stack en alternance
                  </p>
                  <a
                    className="mt-3 animate space-x-1"
                    target="_blank"
                    href="https://www.egiteko.com"
                  >
                    <span className="text-xs">Voir plus</span>
                    <ChevronRightIcon className="right-chevron inline h-4" />
                  </a>
                </div>

                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">Infans</p>
                  <p className="experiences-list-block-date">2019 - 2020</p>
                  <p className="experiences-list-block-info">
                    Junior développeur full stack en alternance
                  </p>
                  <a
                    className="animate space-x-1 mt-3"
                    target="_blank"
                    href="https://infans.fr/"
                  >
                    <span className="text-xs">Voir plus</span>
                    <ChevronRightIcon className="right-chevron inline h-4" />
                  </a>
                </div>
                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">Cas GSB</p>
                  <p className="experiences-list-block-date">2019 - 2020</p>
                  <p className="experiences-list-block-info">
                    Création d'un site et d'une application dans le cadre du GSB
                  </p>
                  <a
                    className="animate space-x-1 mt-3"
                    target="_blank"
                    href="https://cas-gsb.netlify.app/"
                  >
                    <span className="text-xs">Voir plus</span>
                    <ChevronRightIcon className="right-chevron inline h-4" />
                  </a>
                </div>
                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">
                    Infomag (Inactif)
                  </p>
                  <p className="experiences-list-block-date">2018 - 2019</p>
                  <p className="experiences-list-block-info">
                    Création du site Infomag
                  </p>
                </div>
                <div className="experiences-list-block">
                  <p className="experiences-list-block-title">
                    Un projet pour un sourire (Inactif)
                  </p>
                  <p className="experiences-list-block-date">2018</p>
                  <p className="experiences-list-block-info">
                    Création d'un site pour l'association "Un projet pour un
                    sourire"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
