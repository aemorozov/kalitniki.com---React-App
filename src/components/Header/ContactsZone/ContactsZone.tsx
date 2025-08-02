import Location from '../../../img/footer/location.svg';
import classes from './ContactsZone.module.css';

export const ContactsZone = () => {
  return (
    <div className={classes.mainBlock}>
      <a
        href="tel:+74956781001"
        className={classes.phoneNumber}
        title="Позвонить в Калитниковские бани +74956781001"
      >
        <img
          src="/img/header/Icon.svg"
          alt="Иконка телефона"
          width={24}
          height={24}
        />
        +7 495 678 10 01
      </a>
      <a
        href="https://yandex.ru/maps/-/CHX~ED-1"
        target="_blank"
        title="Калитниковские бани на Яндекс-картах"
        className={classes.iconLink}
      >
        <Location
          alt="Калитниковские бани на Яндекс-картах"
          className={classes.icon}
        />
      </a>
    </div>
  );
};
