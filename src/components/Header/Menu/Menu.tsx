import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import secondMenuItemImg from '../../../img/header/Icon_container.svg';
import arrowDown from '../../../img/header/IconDown.svg';
import { useSwitcher } from '../../../utils';
import classes from './Menu.module.css';

export const Menu = () => {
  const pathname = usePathname();

  const [
    isDivisionsHovered,
    ,
    setDivisionsHovered,
    setDivisionsNotHovered
  ] = useSwitcher(false);

  const [divisionsPadding, setDivisionsPadding] = useState(0);

  const subMenuRef = useRef<HTMLDivElement>(null);
  const divisionsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isDivisionsHovered) {
      const subMenuWidth =
        subMenuRef.current?.getBoundingClientRect().width || 0;

      const divisionsWidth =
        divisionsRef.current?.getBoundingClientRect().width || 0;

      const shift = 30;

      setDivisionsPadding(subMenuWidth - divisionsWidth - shift);
    } else {
      setDivisionsPadding(0);
    }
  }, [isDivisionsHovered]);

  return (
    <>
      <div className={classes.mainBlock}>
        <div
          className={classnames(
            classes.containerSecondMenu,
            isDivisionsHovered && classes.containerSecondMenuOpen
          )}
          onMouseEnter={setDivisionsHovered}
          onMouseLeave={setDivisionsNotHovered}
          ref={subMenuRef}
        >
          <Link
            href={'vysshiy-muzhskoy-razryad'}
            className={classes.menuItemSecondMenu}
          >
            <Image
              src={secondMenuItemImg}
              alt="secondMenuItemImg"
              className={classes.secondMenuItemImg}
            ></Image>
            Высший мужской разряд
          </Link>
          <Link
            href={'muzhskoy-razryad'}
            className={classes.menuItemSecondMenu}
          >
            <Image
              src={secondMenuItemImg}
              alt="secondMenuItemImg"
              className={classes.secondMenuItemImg}
            ></Image>
            Мужской разряд
          </Link>
          <Link
            href={'zhenskiy-razryad'}
            className={classes.menuItemSecondMenu}
          >
            <Image
              src={secondMenuItemImg}
              alt="secondMenuItemImg"
              className={classes.secondMenuItemImg}
            ></Image>
            Женский разряд
          </Link>
        </div>

        {items.map(({ name, url }) => {
          const isDivisions = name === items[0].name;

          return (
            <Link
              key={name}
              href={url}
              className={classnames(
                classes.menuItem,
                pathname === url && classes.menuActive,
                isDivisions && isDivisionsHovered && classes.hoverFirstItem
              )}
              style={
                divisionsPadding
                  ? { paddingRight: `${divisionsPadding}px` }
                  : {}
              }
              {...(isDivisions && {
                onMouseEnter: setDivisionsHovered,
                onMouseLeave: setDivisionsNotHovered,
                ref: divisionsRef
              })}
            >
              {name}
              {isDivisions && (
                <Image
                  src={arrowDown}
                  className={classes.arrowDown}
                  alt="Arrow down"
                  width={16}
                  height={15}
                />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

const items: Array<{ url: string; name: string }> = [
  { url: '/razriady', name: 'Разряды' },
  { url: '/vip-kabinety', name: 'VIP-Кабинеты' },
  { url: '/uslugi', name: 'Услуги' },
  { url: '/novosti-i-aktcii', name: 'Новости и акции' },
  { url: '/kyhnya-i-bar', name: 'Кухня и бар' },
  { url: '/contacts', name: 'Контакты' }
];

{
  /* <Link
          href={'news'}
          className={classes.menuItem + ' ' + addWidthMainItem}
          onMouseEnter={() => handleMouseEnter(classes.containerSecondMenuOpen)}
          onMouseLeave={() => handleMouseLeave('')}
        >
          Разряды
          <Image
            src={arrowDown}
            className={classes.arrowDown}
            alt="Arrow down"
            width={16}
            height={15}
          />
        </Link>
        <Link href={'vip-kabinety'} className={classes.menuItem}>
          VIP-Кабинеты
        </Link>
        <Link href={'uslugi'} className={classes.menuItem}>
          Услуги
        </Link>
        <Link href={'novosti-i-aktsii'} className={classes.menuItem}>
          Новости и акции
        </Link>
        <Link href={'kukhnya-i-bar'} className={classes.menuItem}>
          Кухня и бар
        </Link>
        <Link
          href={'kontakty'}
          className={classnames(
            classes.menuItem,
            pathname === '/kontakty' && classes.menuActive
          )}
        >
          Контакты
        </Link> */
}
