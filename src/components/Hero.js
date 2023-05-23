import React from "react";
import { motion } from "framer-motion";
import akin from "../assets/images/akin-evans-vector-dark-mode.svg";
import frontend from "../assets/images/front-end-vector-dark-mode.svg";
import developer from "../assets/images/developer-vector-dark-mode.svg";
import profile_image from "../assets/images/profile-image.png";
import semicircle from "../assets/images/profile-pic-semicircle.svg";
import red_triangle from "../assets/icons/red-triangles.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className='hero-outer-wrapper' id='hero-component'>
      <div className='hero-inner-wrapper'>
        <div className='hero-textSVG-wrapper'>
          <motion.div
            className='akinevans'
            initial={{ opacity: 0, y: 100 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0 }}
          >
            <img src={akin} alt='akin' />
          </motion.div>
          <motion.div
            className='frontend'
            initial={{ opacity: 0, y: 100 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          >
            <img src={frontend} alt='frontend' />
          </motion.div>
          <motion.div
            className='developer'
            initial={{ opacity: 0, y: 100 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          >
            <img src={developer} alt='developer' />
          </motion.div>
        </div>
        <motion.div
          className='profile-pic-wrapper'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
        >
          <img
            className='profile-picture'
            src={profile_image}
            alt='Akin Evans'
          />
          <img className='semicircle' src={semicircle} alt='Akin Evans' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
        >
          <img
            className='red-triangle'
            src={red_triangle}
            alt='red triangles'
          />
        </motion.div>
      </div>
    </section>
  );
}
