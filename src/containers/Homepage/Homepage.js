import React from 'react';
import TinySlider from "tiny-slider-react";

import classes from './Homepage.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Projects } from '../../components/ProjectCard/ProjectData';
import SoloProjectCard from '../../components/SoloProjectCard/SoloProjectCard';
import { SoloProjects } from '../../components/SoloProjectCard/SoloProjectData';

import arrowIcon from '../../assets/chevron-arrow.svg';

const Homepage = (props) => {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: false,
    items: 1,
    gutter: 5,
    controls: false,
    responsive: {
      500: {
        items: 2
      },
      768: {
        items: 4
      },
    }
  };

  let ts = null;
  const onGoTo = dir => ts.slider.goTo(dir);

  return (
    <div className={classes.Homepage}>
      <section className={classes.Header}>
        <h1><span>badi<span className={classes.purple}>,</span></span> <br/>
        <span>at your service<span className={classes.purple}>!</span></span></h1>
      </section>

      <section className={classes.About}>
        <div className={classes.innerAbout}>
        <h3><span>A 19 years old sophomore student majoring CS at the University of Indonesia</span> <br/><br/>
        <span>Fahdii is very passionate when it comes to taking nap and watching movies</span> <br/><br/>
        <span>He also loves spending his time watching movies, especially the thriller/mystery ones</span></h3>
        </div>
      </section>

      <section className={classes.Projects}>
        <div className={classes.MainProjects}>
          <h2>Projects I've Participated in<span className={classes.purple}>.</span></h2>

          <div className={classes.MainProjectsCardWrapper}>
            {Projects.map(el => (
              <ProjectCard
                key={el.id}
                image={el.image}
                name={el.name}
                time={el.time}
                desc={el.desc}
                stacks={el.stacks} />
            ))}
          </div>
        </div>

        <div className={classes.SoloProjects}>
          <h2>Selected Individual Projects<span className={classes.purple}>.</span></h2>

          <div className={classes.SoloProjectsCardWrapper}>
            <img
              className={classes.ArrowLeft}
              src={arrowIcon}
              alt='arrow-left'
              onClick={() => onGoTo('prev')}
            />
              <TinySlider
                className={classes.TinySlider}
                ref={refts => ts = refts}
                settings={settings}
                onClick={event => console.log(event)}
              >
                {SoloProjects.map(el => (
                  <SoloProjectCard
                    key={el.id}
                    image={el.image}
                    name={el.name}
                    url={el.url}
                    repo={el.repo}
                    time={el.time}
                    desc={el.desc}
                    stacks={el.stacks} />
                ))}
              </TinySlider>
              <img
              className={classes.ArrowRight}
              src={arrowIcon}
                alt='arrow-right'
                onClick={() => onGoTo('next')}
              />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage;