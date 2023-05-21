import React, { useState } from "react";
import project_title from "../images/projects-title-dark-mode.svg";
import left_btn from "../icons/left-arrow-dark-mode.svg";
import right_btn from "../icons/right-arrow-dark-mode.svg";
import meditate from "../images/meditate-the-world.png";
import socialsync from "../images/socialsync.png";
import "./Projects.css";

export default function Projects() {
  const slides = [
    {
      image: meditate,
    },
    {
      image: socialsync,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='projects-outer-wrapper'>
      <div className='projects-inner-wrapper'>
        <div className='projects-title-wrapper'>
          <img src={project_title} alt=' project title' />
        </div>
        <div className='slideshow-wrapper'>
          <img
            src={left_btn}
            alt='left arrow button'
            className='left-btn'
            onClick={prevSlide}
          />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt='slideshow of websites in portfolio'
                    className='image'
                  />
                )}
              </div>
            );
          })}

          <img
            src={right_btn}
            alt='right arrow button'
            className='right-btn'
            onClick={nextSlide}
          />

          {/* End slideshow wrapper */}
        </div>
        <div className='description'>
          <h3>{}</h3>
          <p>{}</p>
          <h3>TECH STACK:</h3>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
