import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#ee5a59",
    secundary: "#C7DEFF",
    third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  background: {
    primary: "#02021e",
    secundary: "#161041",
    // third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
};

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}
ul,
li {
  list-style: none;
}
html,
body {
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: ${({ theme }) => theme.background.primary};
  font-family: 'Gilroy', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size:16px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1366px;

  margin: 0 auto;
  /* background: blue; */
`;
