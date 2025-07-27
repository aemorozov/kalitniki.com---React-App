type MenuExpander = 'sections' | 'vip';

type MenuItem = {
  name: string;
} & (
  | { url: string; expander?: never; subMenu?: never }
  | {
      expander: MenuExpander;
      subMenu: Array<{ name: string; url: string }>;
      url?: never;
    }
);

export const menu: Array<MenuItem> = [
  {
    name: 'Разряды',
    expander: 'sections',
    subMenu: [
      { name: 'Высший мужской разряд', url: '/vysshiy-muzhskoy-razryad' },
      { name: 'Мужской разряд', url: '/muzhskoy-razryad' },
      { name: 'Женский разряд', url: '/zhenskiy-razryad' }
    ]
  },
  {
    name: 'VIP-кабинеты',
    url: '/vip-kabinety'
    // subMenu: [
    //   { name: 'Турин', url: '/turin' },
    //   { name: 'Комфорт', url: '/komfort' },
    //   { name: 'Римский', url: '/rimsky' },
    //   { name: 'Большой', url: '/bolshoi' },
    //   { name: 'Малый', url: '/malii' }
    // ],
  },
  {
    name: 'Услуги',
    url: '/uslugi'
  },
  {
    name: 'Новости и акции',
    url: '/novosti-i-aktsii'
  },
  {
    name: 'Кухня и бар',
    url: '/kukhnya-i-bar'
  },
  {
    name: 'Контакты',
    url: '/kontakty'
  }
];
