type MenuItem = {
  name: string;
  mobileName?: string;
  visibleOnlyAt?: 'top' | 'bottom';
} & (
  | { url: string; subMenu?: never }
  | {
      subMenu: Array<{ name: string; url: string; isContact?: boolean }>;
      url?: never;
    }
);

const menu: Array<MenuItem> = [
  {
    name: 'О калитниках',
    subMenu: [
      {
        name: 'Новости и акции',
        url: '/novosti-i-aktsii'
      },
      {
        name: 'Контакты',
        url: '/kontakty'
      }
    ],
    visibleOnlyAt: 'bottom'
  },
  {
    name: 'Разряды',
    subMenu: [
      { name: 'Высший мужской разряд', url: '/vysshiy-muzhskoy-razryad' },
      { name: 'Мужской разряд', url: '/muzhskoy-razryad' },
      { name: 'Женский разряд', url: '/zhenskiy-razryad' }
    ]
  },
  {
    name: 'Контакты',
    subMenu: [
      {
        name: '+7 (495) 678 10 01',
        url: 'tel:+74956781001',
        isContact: true
      },
      {
        name: 'email@kalitniki.com',
        url: 'mailto:email@kalitniki.com',
        isContact: true
      }
    ],
    visibleOnlyAt: 'bottom'
  },
  {
    name: 'VIP-кабинеты',
    mobileName: 'Кабинеты',
    subMenu: [
      { name: 'Турин', url: '/turin' },
      { name: 'Комфорт', url: '/komfort' },
      { name: 'Римский', url: '/rimsky' },
      { name: 'Большой', url: '/bolshoi' },
      { name: 'Малый', url: '/malii' }
    ]
  },
  {
    name: 'Услуги',
    url: '/uslugi',
    visibleOnlyAt: 'top'
  },
  {
    name: 'Услуги',
    subMenu: [
      {
        name: 'Банные процедуры',
        url: '/parenia'
      },
      {
        name: 'Кухня и бар',
        url: '/kukhnya-i-bar'
      }
    ],
    visibleOnlyAt: 'bottom'
  },
  {
    name: 'Новости и акции',
    url: '/novosti-i-aktsii',
    visibleOnlyAt: 'top'
  },
  {
    name: 'Кухня и бар',
    url: '/kukhnya-i-bar',
    visibleOnlyAt: 'top'
  },
  {
    name: 'Контакты',
    url: '/kontakty',
    visibleOnlyAt: 'top'
  }
];

export const topMenu = menu.filter(
  ({ visibleOnlyAt }) => visibleOnlyAt !== 'bottom'
);

export const bottomMenu = menu.filter(
  ({ visibleOnlyAt }) => visibleOnlyAt !== 'top'
);
