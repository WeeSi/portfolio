import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { HashLink } from "react-router-hash-link";

const items = [
  {
    name: "A propos",
    url: "/#about",
  },
  {
    name: "Compétence",
    url: "/#skills",
  },
  {
    name: "Expériences",
    url: "/#exp",
  },
  {
    name: "Projets",
    url: "/#projects",
  },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen, closeSideBar }) => (
  <motion.ul
    style={{ pointerEvents: isOpen ? "" : "none" }}
    className="nav-ul"
    variants={variants}
  >
    {items.map((i) => (
      <HashLink key={i.name} onClick={() => closeSideBar()} to={`${i.url}`}>
        <MenuItem name={i.name} i={i} key={i.name} />
      </HashLink>
    ))}
  </motion.ul>
);
