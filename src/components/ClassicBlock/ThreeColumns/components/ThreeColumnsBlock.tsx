import React from 'react';
import classes from './ThreeColumnsBlock.module.css';
import Image from 'next/image';
import { ThreeColumnsBlockData } from '../data/data';

export function ThreeColumnsBlock() {
  type ThreeColumnsBlockDataItem = {
    img: string;
    header: string;
    tags: Array<string>;
    schedule: Array<Array<string>>;
    price: Array<string>;
  };

  return (
    <>
      {ThreeColumnsBlockData.map((item: ThreeColumnsBlockDataItem) => {
        return (
          <div className={classes.block} key={item.header}>
            <div className={classes.divForImg}>
              <Image
                src={item.img}
                className={classes.img}
                alt=""
                title=""
                fill
              />
            </div>
            <div className={classes.descriptionBlock}>
              <div>
                <h2 className={classes.header}>{item.header}</h2>
                <div className={classes.tags}>
                  {item.tags.map((tag) => {
                    return (
                      <div className={classes.tag} key={tag}>
                        <p className={classes.tagP}>{tag}</p>
                      </div>
                    );
                  })}
                </div>
                <div className={classes.scheduleBlock}>
                  {item.schedule.map((day) => {
                    return (
                      <div className={classes.row} key={day[0]}>
                        <p className={classes.scheduleDay}>{day[0]}</p>
                        <p className={classes.scheduleTime}>{day[1]}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className={classes.priceBlock}>
                  <p className={classes.price}>
                    От {item.price[0]} &#8381;/{item.price[1]}
                  </p>
                  <p className={classes.priceDescription}>
                    После 2х часов действует поминутная тарификация
                  </p>
                </div>
                <div className={classes.moreButtonBlock}>
                  <button className={classes.moreButton}>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
