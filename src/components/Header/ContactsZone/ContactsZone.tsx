import classes from './ContactsZone.module.css';

export const ContactsZone = () => {
  return (
    <div className={classes.mainBlock}>
      <div className={classes.phoneNumber}>
        <img
          src="/img/header/Icon.svg"
          alt="Иконка телефона"
          width={24}
          height={24}
        />
        <span className={classes.span}>+7 495 678 10 01</span>
      </div>
      <div className={classes.geoPoint}>
        <img
          src="/img/header/geoIcon.svg"
          alt="Геоточка"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
