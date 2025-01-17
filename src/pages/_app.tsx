import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import '../styles/style.css';
import '../styles/colors.css';

export default ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
