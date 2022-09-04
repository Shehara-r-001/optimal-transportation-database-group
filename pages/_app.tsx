import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Bg from '../components/Bg';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Bg />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
