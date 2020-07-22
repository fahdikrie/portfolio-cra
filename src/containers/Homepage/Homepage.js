import React from 'react';

import classes from './Homepage.module.css';

const Homepage = () => {
  return (
    <div className={classes.Homepage}>
      <section className={classes.Header}>
        <h1><span>badi<span className={classes.purple}>,</span></span> <br/>
        <span>at your service<span className={classes.purple}>!</span></span></h1>
      </section>

      <section className={classes.About}>
        <div className={classes.innerAbout}>
        <h3><span>A 19 years old sophomore student majoring Computer Science at the University of Indonesia</span> <br/><br/>
        <span>Fahdii is very passionate when it comes to taking nap and listening to music</span> <br/><br/>
        <span>He also loves spending his time watching movies, especially the thriller/mystery ones</span></h3>
        </div>
      </section>

      <section className={classes.Projects}>
        <div className={classes.MainProjects}>
          <h2>Main Projects</h2>

          <div className={classes.MainProjectCard}>
            <h3>Bruh ini benerean?</h3>
            <p>loremipsumdolor sitamet skkdkdk dadada</p>
          </div>
          <div className={classes.MainProjectCard}>
            <h3>Bruh ini benerean?</h3>
            <p>loremipsumdolor sitamet skkdkdk dadada</p>
          </div>
          <div className={classes.MainProjectCard}>
            <h3>Bruh ini benerean?</h3>
            <p>loremipsumdolor sitamet skkdkdk dadada</p>
          </div>
          <div className={classes.MainProjectCard}>
            <h3>Bruh ini benerean?</h3>
            <p>loremipsumdolor sitamet skkdkdk dadada</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage;