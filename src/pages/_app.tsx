import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import '../styles/colors.css';
import '../styles/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
