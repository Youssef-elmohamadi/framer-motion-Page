import "./hero.css";
import bgSlate from "../assets/images/bg-slate.png";
import blackCoffee from "../assets/images/black.png";
import { useState } from "react";
import { Nav } from "./Nav";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const bgStyle = {
  backgroundImage: `url(${bgSlate})`,
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Hero = () => {
  // Create separate refs for each animated element
  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: false });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: false });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: sidebarRef, inView: sidebarInView } = useInView({
    triggerOnce: false,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
  });

  const [sideBar, setSideBar] = useState(false);

  return (
    <main>
      <section
        style={bgStyle}
        className="w-100 container-fluid overflow-hidden position-relative "
      >
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
        <div className="row px-5 hero">
          {/* Left Section */}
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-sm-start justify-content-md-center align-items-sm-center position-relative">
            <motion.h1
              ref={h1Ref}
              initial={{ y: -100, opacity: 0 }}
              animate={
                h1InView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
              }
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.3,
              }}
              className="text-light-orange display-1 fw-bolder mb-4 ms-md-5"
            >
              Blvck Tumbler
            </motion.h1>
            <motion.div
              ref={textRef}
              initial={{ y: 100, opacity: 0 }}
              animate={
                textInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.5,
              }}
              className="position-relative"
            >
              <motion.div className="p-4">
                <h5 className="text-light-orange fs-4 w-75 my-2 position-relative z-1 align-self-start">
                  Black Lifestyle Lovers,
                </h5>
                <p className="text-light-orange opacity-50 w-75 align-self-start position-relative z-1 font-size-low fs-0.5 ms- mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto
                  deserunt quis voluptatibus in quisquam quia ducimus
                </p>
              </motion.div>
              <div className="text-erea-light position-absolute"></div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="col-lg-4 col-md-6 col-12 position-relative">
            <div className="black-coffee position-absolute top-50 start-50 translate-middle">
              <motion.img
                ref={imgRef}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  imgInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  duration: 2,
                  type: "spring",
                  stiffness: 200,
                  delay: 0,
                }}
                src={blackCoffee}
                alt="hero"
                className="black-coffee-img position-relative z-4 h-100"
              />
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={
                  imgInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 200,
                  delay: 0.2,
                }}
                className="orange-circle position-absolute z-2"
              ></motion.div>
              <motion.p
                ref={sidebarRef}
                initial={{ x: 100, opacity: 0 }}
                animate={
                  sidebarInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
                }
                transition={{
                  duration: 2,
                  type: "spring",
                  stiffness: 200,
                  delay: 1,
                }}
                className="position-absolute font-size-high fw-bolder lh-1 z-1"
              >
                Blvck Tumbler
              </motion.p>
            </div>
          </div>

          <div className="  col-lg-4  d-none  left-margin   d-lg-flex justify-content-center align-items-center position-relative ">
            <motion.div
              ref={rightRef}
              initial={{ y: 100, opacity: 0 }}
              animate={
                rightInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
              }
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                delay: 0.5,
              }}
              className=" position-relative  "
            >
              <div className="p-4 position-relative ">
                <h5 className="text-light-orange fs-4 w-75 my-2  position-relative z-1 align-self-start ">
                  Black Lifestyle Lovers,
                </h5>
                <p className="text-light-orange opacity-50  w-75   position-relative z-1 font-size-low fs-0.5 ms- mb-0 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus aspernatur, cumque eos neque dolorem architecto
                  deserunt quis voluptatibus in quisquam quia ducimus
                </p>
                <div className=" text-erea-dark position-absolute  "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        {sideBar && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              delay: 0.5,
            }}
            className="side-bar position-absolute end-0 bottom-0 h-100 bg-dark d-flex flex-column align-items-center justify-content-center gap-1"
          >
            <div className="bg-white line"></div>
            <div className="icon border border-white rounded-circle d-flex justify-content-center align-items-center">
              <TiSocialFacebook color="white" size={24} />
            </div>
            <div className="icon border border-white rounded-circle d-flex justify-content-center align-items-center">
              <BsTwitterX color="white" size={24} />
            </div>
            <div className="icon border border-white rounded-circle d-flex justify-content-center align-items-center">
              <FaInstagram color="white" size={24} />
            </div>
            <div className="bg-white line"></div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
