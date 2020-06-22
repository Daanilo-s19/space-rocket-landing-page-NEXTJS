import App from "next/app";
import Head from "next/head";
import I18n from "../lib/i18n";
import AOS from "aos";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../styles";
import "aos/dist/aos.css";

export default class MyApp extends App {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Space Rocket</title>
          <link rel="icon" href="/favicon_space.svg" />
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
