import App from "next/app";
import Head from "next/head";
import { i18n, appWithTranslation } from "../../i18n";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Container, theme } from "../../styles";

class MyApp extends App {
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
        <Container>
          <GlobalStyle />
          {/* <ParticlesBackGround style={{ top: "0", left: "0" }} /> */}
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
