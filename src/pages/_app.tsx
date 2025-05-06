import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import Head from 'next/head';
import '../styles/style.css';
import '../styles/colors.css';

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};
