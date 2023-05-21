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

  //! Write Logic for dynamically showing info for projects slideshow

  const projectInfo = [
    {
      title: "MEDITATE THE WORLD",
      description: "Landing page for a meditation studio",
      stack: (
        <div>
          <div>React</div>
          <div>JavaScript</div>
          <div>Vanilla CSS</div>
          <div>Framer Motion</div>
        </div>
      ),
    },
    {
      title: "SocialSync",
      description: "Website for a messenger service",
      stack: (
        <div>
          <div>React</div>
          <div>JavaScript</div>
          <div>Vanilla CSS</div>
          <div>Framer Motion</div>
        </div>
      ),
    },
  ];

  function displayProjectInfo() {
    return (
      <div className='description'>
        <h3 className='description-title'>{projectInfo[0].title}</h3>
        <p>{projectInfo[0].description}</p>
        <h3 className='techstack'>TECH STACK:</h3>
        <p>{projectInfo[0].stack}</p>
      </div>
    );
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
        {displayProjectInfo()}
      </div>
    </div>
  );
}
