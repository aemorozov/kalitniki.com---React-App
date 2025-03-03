import React from 'react';
import classes from './ThreeColumns.module.css';
import Image from 'next/image';

export function ThreeColumns() {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.block}></div>
      <div className={classes.block}></div>
      <div className={classes.block}></div>
    </div>
  );
}
