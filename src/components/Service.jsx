import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import coffee1 from "../assets/images/coffee1.png";
import coffee3 from "../assets/images/coffee3.png";
import "./service.css";

const Service = () => {
  const coffeeCups = [
    {
      id: 1,
      title: "Black Coffee",
      subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: coffee1,
    },
    {
      id: 2,
      title: "Hot Coffee",
      subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: coffee3,
    },
    {
      id: 3,
      title: "Cold Coffee",
      subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: coffee3,
    },
  ];

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="container py-5 my-5">
      {/* Header */}
      <div
        className="header d-flex justify-content-center flex-column align-items-center"
        ref={headerRef}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 200,
            delay: 0.2,
          }}
          className="display-6 fw-bolder mb-4"
        >
          Fresh and <span className="primary-color">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={
            headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 200,
            delay: 0.4,
          }}
          className="w-50 text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="row"
      >
        {coffeeCups.map((coffee) => (
          <motion.div
            key={coffee.id}
            variants={childVariants}
            className="col-lg-4 col-md-6 col-12 my-3"
          >
            <div className="text-center">
              <img src={coffee.image} className="card-img-top" alt="Coffee" />
              <div className="card-body text-center my-3">
                <h2 className="card-title primary-color fw-bolder">
                  {coffee.title}
                </h2>
                <p className="card-text fs-5">{coffee.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
