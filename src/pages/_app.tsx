import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import Head from 'next/head';
import '../styles/style.css';

import '../styles/colors.css';
import '../styles/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
