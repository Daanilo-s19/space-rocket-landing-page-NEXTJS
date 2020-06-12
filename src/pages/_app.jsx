import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container, theme } from "../../styles";
import I18n from "../lib/i18n";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Space Rocket</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="../src/fonts/stylesheet.css"
          ></link>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <GlobalStyle />
        <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
          <Component {...pageProps} />
        </I18n>
      </ThemeProvider>
    );
  }
}
