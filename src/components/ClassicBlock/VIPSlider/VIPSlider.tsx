import React from 'react';
import Image from 'next/image';
import classes from './VIPSlider.module.css';
import leaf from '../../../img/header/Icon_container.svg';

export function VIPSlider() {
  return (
    <div className={classes.contentBlock}>
      <ul className={classes.names}>
        <li className={classes.name + ' ' + classes.nameActive}>
          <Image src={leaf} alt="text" className={classes.leaf} /> Турин
        </li>
        <li className={classes.name}>
          <Image src={leaf} alt="text" className={classes.leaf} /> Комфорт
        </li>
        <li className={classes.name}>
          <Image src={leaf} alt="text" className={classes.leaf} /> Римский
        </li>
        <li className={classes.name}>
          <Image src={leaf} alt="text" className={classes.leaf} /> Большой
        </li>
        <li className={classes.name}>
          <Image src={leaf} alt="text" className={classes.leaf} /> Малый
        </li>
      </ul>
      <div className={classes.slides}>
        <div className={classes.image}></div>
        <div className={classes.textBlock}></div>
      </div>
    </div>
  );
}
