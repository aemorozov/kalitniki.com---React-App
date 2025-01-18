import classes from './ContactsZone.module.css';
import icon from '../../../img/header/Icon.svg';
import geoIcon from '../../../img/header/geoIcon.svg';
import Image from 'next/image';

export const ContactsZone = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.phoneNumber}>
        <Image src={icon} alt="Иконка телефона" width={24} height={24} />
        <span className={classes.span}>+7 495 678 10 01</span>
      </div>
      <div className={classes.geoPoint}>
        <Image src={geoIcon} alt="Геоточка" width={24} height={24} />
      </div>
    </div>
  );
};
