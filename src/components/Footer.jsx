import React from "react";
import "./footer.css";
import { motion } from "motion/react";
import { PiPhoneCallLight } from "react-icons/pi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import credit from "../assets/images/credit-cards.webp";
const Footer = () => {
  return (
    <>
      <div className="footer container-fluid  py-3">
        <div className="row">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              delay: 0.3,
            }}
            className="col-sm-6 col-md-4 col-12"
          >
            <h1 className="text-white mb-3 fw-bold fs-2 text-uppercase">
              Coders Cafe
            </h1>
            <p className="text-white mb-3 custom-text w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div className="call d-flex align-items-center mb-3 gap-2">
              <PiPhoneCallLight color="white" size={24} />
              <p className="text-white m-0">+1 (123) 456-7890</p>
            </div>
            <div className="map d-flex align-items-center mb-3 gap-2">
              <LiaMapMarkedAltSolid color="white" size={24} />
              <p className="text-white m-0">Noida, Uttar Pradesh</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              delay: 0.4,
            }}
            className="col-sm-6 col-md-4 col-12"
          >
            <h1 className="text-white mb-3 fw-bold fs-2 ">Quick Links</h1>
            <div className="lists d-flex gap-5 ">
              <ul className="list-group text-white">
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Home
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  About
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Contact Us
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Privacy Policy
                </li>
              </ul>
              <ul className="list-group text-white">
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Home
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  About
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Contact Us
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 text-white">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              delay: 0.5,
            }}
            className="col-sm-6 col-md-4 mb-5 col-12"
          >
            <h1 className="text-white mb-3 fw-bold fs-2">Follow Us</h1>
            <div className="social d-flex gap-3">
              <div className="facebook">
                <TiSocialFacebook color="white" size={24} />
              </div>
              <div className="twitter">
                <BsTwitterX color="white" size={24} />
              </div>
              <div className="instagram">
                <FaInstagram color="white" size={24} />
              </div>
              <div className="youtube">
                <FaYoutube color="white" size={24} />
              </div>
            </div>
            <h6 className="text-white fw-bold mt-3">Payment Methods</h6>
            <div className="img w-100">
              <img src={credit} alt="" className="w-100" />
            </div>
          </motion.div>
          <div className="col-12">
            <p className="text-white text-center p-4 border-top border-white ">
              © 2023 Coders Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
