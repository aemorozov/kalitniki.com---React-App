import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components/Layout';

import '../styles/colors.css';
import '../styles/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />

        <title>Калитниковские бани — банный комплекс в Москве</title>
        <meta
          name="description"
          content="Калитниковские бани в Москве — банный комплекс с мужскими, женскими и детскими залами, VIP‑залами, кафе, массажем и бассейном. Узнайте цены, скидки, расписание и забронируйте онлайн."
        />
        <meta
          name="keywords"
          content="Калитниковские бани, баня Москва, банный комплекс, баня Москва цены, баня с массажем, баня с кафе"
        />
        <meta name="author" content="Калитниковские бани" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/img/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Калитниковские бани — банный комплекс в Москве"
        />
        <meta
          property="og:description"
          content="Банный комплекс Калитниковские бани: мужской, женский и детский разряды, VIP‑залы, кафе, бассейн и массаж. Цены, акции и онлайн‑бронирование."
        />
        <meta property="og:url" content="https://kalitniki.com/" />
        <meta property="og:site_name" content="Калитниковские бани" />
        <meta
          property="og:image"
          content="https://kalitniki.com/img/kalitniki.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Калитниковские бани — банный комплекс в Москве"
        />
        <meta
          name="twitter:description"
          content="Мужские, женские и детские залы, VIP‑зоны, кафе, бассейн, массаж и скидки. Всё о Калитниковских банях на официальном сайте."
        />
        <meta
          name="twitter:image"
          content="https://kalitniki.com/img/kalitniki.jpg"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
