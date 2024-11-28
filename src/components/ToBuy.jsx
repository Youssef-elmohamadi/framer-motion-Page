import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

import Map from "../assets/images/world-map.png";
import "./tobuy.css";

const ToBuy = () => {
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
  });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: false });
  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: false,
  });
  const { ref: emailRef, inView: emailInView } = useInView({
    triggerOnce: false,
  });
  const { ref: countryRef, inView: countryInView } = useInView({
    triggerOnce: false,
  });
  const { ref: zipRef, inView: zipInView } = useInView({ triggerOnce: false });

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <div className="container-fluid row justify-content-around my-5 py-3">
      <motion.div
        ref={formRef}
        variants={parentVariants}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        className="col-sm-4 col-12"
      >
        <motion.h1 variants={childVariants} className="fw-bold mb-4">
          Buy our products from anywhere
        </motion.h1>

        <motion.div
          ref={nameRef}
          variants={childVariants}
          className="d-flex align-items-center justify-content-around row"
        >
          <input
            type="text"
            placeholder="name"
            className="col-lg-7 col-5 rounded border-1 no-shadow p-2"
          />
          <input
            type="email"
            placeholder="email"
            className="col-lg-4 col-5 rounded border-1 no-shadow p-2"
          />
        </motion.div>

        <motion.div
          ref={countryRef}
          variants={childVariants}
          className="d-flex align-items-center justify-content-around mt-3 row"
        >
          <input
            type="text"
            placeholder="country"
            className="col-lg-4 col-5 rounded border-1 no-shadow p-2"
          />
          <input
            type="text"
            placeholder="zip code"
            className="col-lg-7 col-5 rounded border-1 no-shadow p-2"
          />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="d-flex col-12 px-0 align-items-center justify-content-around mt-3 row"
        >
          <button className=" d-block align-center px-1 col-12 text-white bg-primary-color p-1 border-0 rounded">
            Order Now
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={mapRef}
        className="d-flex align-items-center my-5 col-sm-4 col-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={
          mapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1, delay: 1 }}
      >
        <img src={Map} alt="World Map" className="w-100" />
      </motion.div>
    </div>
  );
};

export default ToBuy;
