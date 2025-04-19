import React from 'react';
import Image from 'next/image';
import classes from './ClassicBlock.module.css';
import { ThreeColumns } from './ThreeColumns/ThreeColumns';
import vipBackImg from '../../img/mainPage/vip/d4d5a7239e7aac5883c5d8bea7488137.png';
import { VIPSlider } from './VIPSlider/VIPSlider';

const blocksData = [
  {
    headerH2: 'Калитниковские бани',
    headerH3: 'Общественные разряды',
    content: <ThreeColumns />,
    backgroundImage: '',
    backgroundImageAlt: 'nothing'
  },
  {
    headerH2: 'VIP-кабинеты',
    headerH3: 'Для отдыха <br /> в компании близких',
    content: <VIPSlider />,
    backgroundImage: vipBackImg,
    backgroundImageAlt: 'Woman'
  }
];

export function ClassicBlock() {
  return (
    <>
      {blocksData.map((block, i) => {
        return (
          <div className={classes.classicBlock} key={i}>
            {block.backgroundImage ? (
              <Image
                src={block.backgroundImage}
                alt={block.backgroundImageAlt}
                className={classes.backgroundImageVIP}
              ></Image>
            ) : (
              ''
            )}

            <div className={classes.contentBlock}>
              <div className={classes.headers}>
                <h2 className={classes.headerH2}>{block.headerH2}</h2>
                <h3 className={classes.headerH3}>
                  {block.headerH3.split('<br />').map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              {block.content}
            </div>
          </div>
        );
      })}
    </>
  );
}
