import '../styles/globals.css';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect } from 'react';
import ToggleDarkMode from '../components/ToggleDarkMode';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider colorModeManager={localStorageManager}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <ToggleDarkMode />
    </ChakraProvider>
  );
}

export default MyApp;
