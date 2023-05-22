import React from "react";
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
          <img src={akin} alt='akin' />
          <img src={frontend} alt='frontend' />
          <img src={developer} alt='developer' />
        </div>
        <img className='profile-picture' src={profile_image} alt='Akin Evans' />

        <img className='semicircle' src={semicircle} alt='Akin Evans' />
        <img className='red-triangle' src={red_triangle} alt='red triangles' />
      </div>
    </section>
  );
}
