import React from 'react';

import classes from './ProjectCard.module.css';

const ProjectCard = ({ image, name, desc, stacks }) => {
  return (
    <div className={classes.ProjectCard}>
      <div className={classes.ProjectCardHeader}>
        <img className={classes.ProjectCardImg} src={image} alt='siput'></img>
        <div className={classes.ProjectCardTitle}>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>

      <div className={classes.ProjectCardStacks}>
        <p>{stacks.join(" | ")}</p>
      </div>
    </div>
  )
}

export default ProjectCard;