import React from 'react';
import './app.scss';
import {AppProps} from 'next/app';
import Head from 'next/head';

function CustomApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mycv!</title>
      </Head>
      <main className="app">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
