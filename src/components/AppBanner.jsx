import React from "react";
import "./app-banner.css";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import coffeeCover from "../assets/images/coffee-cover.jpg";
import playStore from "../assets/images/play_store.png";
import appStore from "../assets/images/app_store.png";
import { h1, img } from "motion/react-client";
const AppBanner = () => {
  const bgStyle = {
    backgroundImage: `url(${coffeeCover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    with: "100% !important",
    height: "100% !important",
  };
  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: false });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: false });

  return (
    <>
      <div className="container-fluid px-5">
        <div
          style={bgStyle}
          className=" rounded my-5 app-banner w-100 d-flex justify-content-end align-items-center row"
        >
          <div className="content col-lg-6 col-12 p-2">
            <motion.h1
              ref={h1Ref}
              initial={{ y: 100, opacity: 0 }}
              animate={h1InView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.3,
              }}
              className="fw-bolder fs-4 text-dark text-center"
            >
              Download the app
            </motion.h1>
            <motion.p
              ref={h1Ref}
              initial={{ y: 100, opacity: 0 }}
              animate={h1InView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.4,
              }}
              className="text-dark fs-6  text-center"
            >
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis
            </motion.p>
            <div className="get-app col-lg-6 col-12 row w-100 d-flex justify-content-center">
              <motion.img
                ref={imgRef}
                initial={{ y: 100, opacity: 0 }}
                animate={
                  imgInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5,
                }}
                className="col-6 col-md-4"
                src={playStore}
                alt=""
              />
              <motion.img
                ref={imgRef}
                initial={{ y: 100, opacity: 0 }}
                animate={
                  imgInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.6,
                }}
                className="col-6 col-md-4"
                src={appStore}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
