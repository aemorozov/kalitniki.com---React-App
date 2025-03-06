import React from 'react';
import classes from './ThreeColumns.module.css';
import Image from 'next/image';
import img1 from '../../../img/mainPage/razryadi/624a058fadac0d6ba512a126c6bcab3b.jpeg';
import img2 from '../../../img/mainPage/razryadi/a4e7f235808aafac4df84c7ed14fb90a.jpeg';
import img3 from '../../../img/mainPage/razryadi/088edf0157c22276f535233deb19efd5.jpeg';

export function ThreeColumns() {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.block}>
        <div className={classes.divForImg}>
          <Image src={img1} className={classes.img} alt="" title="" />
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.divForImg}>
          <Image src={img2} className={classes.img} alt="" title="" />
        </div>
      </div>
      <div className={classes.block}>
        <div className={classes.divForImg}>
          <Image src={img3} className={classes.img} alt="" title="" />
        </div>
      </div>
    </div>
  );
}
