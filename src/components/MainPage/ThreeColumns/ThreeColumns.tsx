import React from 'react';
import classes from './ThreeColumns.module.css';
import { ThreeColumnsBlock } from './components/ThreeColumnsBlock';

export function ThreeColumns() {
  return (
    <>
      <div className={classes.mainBlock}>
        <ThreeColumnsBlock />
      </div>
      <div className={classes.bottomDescription}>
        <p>
          Cвежий пар{' '}
          <span className={classes.bottomDescriptionSpan}>на травах</span>{' '}
          каждые <span className={classes.bottomDescriptionSpan}>40 минут</span>{' '}
          для всех гостей наших бань!
        </p>
      </div>
    </>
  );
}
