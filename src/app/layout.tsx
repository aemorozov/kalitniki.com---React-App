import { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Header } from '../components/Header/Header';
import './global.css';

// ТУТ ВСЕ НАДО ПОПРАВИТЬ!!!
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }]
  },
  metadataBase: new URL('https://www.mane.gallery/'),
  title: 'Наталья, продуктовый дизайнер, UX/UI дизайнер',
  description: 'Резюме и портфолио Натальи, UX/UI дизайнер',
  openGraph: {
    type: 'website',
    title: 'Наталья, продуктовый дизайнер, UX/UI дизайнер',
    description: 'Наталья, продуктовый дизайнер, UX/UI дизайнер',
    url: 'https://www.mane.gallery/',
    images: [
      {
        url: '/images/me_small.webp',
        width: 640,
        height: 640,
        alt: 'Наталья, продуктовый дизайнер, UX/UI дизайнер'
      }
    ],
    siteName: 'ManeGallery',
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://www.mane.gallery/',
    description: 'Наталья, продуктовый дизайнер, UX/UI дизайнер',
    images: ['/images/me_small.webp']
  }
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1, viewport-fit=cover"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <body id="top">
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
};

export default Layout;
