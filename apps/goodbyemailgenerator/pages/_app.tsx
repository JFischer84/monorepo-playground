import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function CustomApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Welcome to goodbyemailgenerator!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>

  );
}

export default CustomApp;
