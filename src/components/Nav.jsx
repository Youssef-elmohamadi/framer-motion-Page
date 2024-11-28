import React from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "motion/react";

export const Nav = ({sideBar , setSideBar} ) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 200,
        delay: 0.3,
      }}
      className="nav position-relative p-4 z-2 container-fluid d-flex justify-content-between"
    >
      <div className="navbar-brand">
        <h1 className="text-uppercase fs-4 fw-bolder text-white">
          <span className="primary-color">coders</span> coffee
        </h1>
      </div>
      <GiHamburgerMenu
        onClick={() => setSideBar(!sideBar)}
        className="fs-2 text-white"
      />
    </motion.div>
  );
};

export default Nav;
