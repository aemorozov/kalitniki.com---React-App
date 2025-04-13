import { FC, ReactNode } from 'react';
import classes from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  backgroundImage?: string;
  title: ReactNode;
  subTitle: ReactNode;
};

export const Section: FC<SectionProps> = ({
  children,
  backgroundImage,
  title,
  subTitle
}) => {
  return (
    <div className={classes.classicBlock}>
      {backgroundImage && (
        <div
          // ЭТО ФОН, НЕ НАДО ДЕЛАТЬ КАРТИНКОЙ!!!
          style={{ backgroundImage }}
          className={classes.backgroundImageVIP}
        />
      )}

      <div className={classes.contentBlock}>
        <div className={classes.headers}>
          <h2 className={classes.headerH2}>{title}</h2>
          <h3 className={classes.headerH3}>{subTitle}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};
