import React from 'react';
import classes from './ClassicBlock.module.css';
import { ThreeColumns } from './ThreeColumns/ThreeColumns';

export function ClassicBlock() {
  return (
    <div className={classes.classicBlock}>
      <div className={classes.contentBlock}>
        <div className={classes.headers}>
          <h2 className={classes.headerH2}>Калитниковские бани</h2>
          <h3 className={classes.headerH3}>Общественные разряды</h3>
        </div>
        <ThreeColumns />
      </div>
    </div>
  );
}
