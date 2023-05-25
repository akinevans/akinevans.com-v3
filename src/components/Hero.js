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
  const isMobile = window.innerWidth <= 520;
  console.log(isMobile);

  // provide animation data to motion div's
  function getAnimation(element) {
    const akinevans = {
      hidden: { opacity: 0, y: 100 },
      visible: { y: 0, x: 0, opacity: 1 },
    };

    const frontend = {
      hidden: { opacity: 0, y: 100 },
      visible: { y: 0, x: 0, opacity: 1 },
    };

    const developer = {
      hidden: { opacity: 0, y: 100 },
      visible: { y: 0, x: 0, opacity: 1 },
    };

    const profile = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const semicircle = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const underline = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const redTriangle = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    // If the screen size is smaller than 520px execute the following
    if (!isMobile) {
      if (element === "akinevans") {
        return akinevans;
      } else if (element === "frontend") {
        return frontend;
      } else if (element === "developer") {
        return developer;
      } else if (element === "profile") {
        return profile;
      } else if (element === "semicircle") {
        return semicircle;
      } else if (element === "underline") {
        return underline;
      } else if (element === "redTriangle") {
        return redTriangle;
      }
    }
  } // end getAnimation function

  //you need to refresh the page, it doesn't update when you resize the window

  return (
    <section className='hero-outer-wrapper' id='hero-component'>
      <div className='hero-inner-wrapper'>
        <div className='hero-textSVG-wrapper'>
          <motion.div
            variants={!isMobile ? getAnimation("akinevans") : null}
            className='akinevans animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 0 }}
          >
            <img src={akin} alt='akin' />
          </motion.div>
          <motion.div
            variants={!isMobile ? getAnimation("frontend") : null}
            className='frontend animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.2 }}
          >
            <img src={frontend} alt='frontend' />
          </motion.div>
          <motion.div
            variants={!isMobile ? getAnimation("developer") : null}
            className='developer animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 0.4 }}
          >
            <img src={developer} alt='developer' />
          </motion.div>

          <motion.img
            variants={!isMobile ? getAnimation("profile") : null}
            className='profile-picture animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            src={profile_image}
            alt='Akin Evans'
          />
          <motion.img
            variants={!isMobile ? getAnimation("semicircle") : null}
            className='semicircle animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            src={semicircle}
            alt='Akin Evans'
          />

          <motion.img
            variants={!isMobile ? getAnimation("redTriangle") : null}
            className='red-triangle animation'
            initial='hidden'
            animate='visible'
            transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
            src={red_triangle}
            alt='red triangles'
          />
        </div>
      </div>
    </section>
  );
}
