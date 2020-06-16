import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#ee5a59",
    secundary: "#C7DEFF",
    third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  colorsButton: {
    primary: "#552ee5",
    secundary: "#552ee5",
    // third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  background: {
    primary: "#02021e",
    secundary: "#161041",
    // third: "linear-gradient(40.72deg, #552EE5 14.56%, #EE5A59 85.55%);",
  },
  breakpoint: {
    mobileS: "(max-width: 320px)",
    mobileM: "(max-width: 375px)",
    mobileL: "(max-width: 425px)",
    tablet: "(max-width: 768px)",
    laptop: "(max-width: 1024px)",
    laptopL: "(max-width: 1440px)",
    desktop: "(max-width: 2560px)",
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
  box-sizing: border-box;
}
button{
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

}
a:link {
    font-weight: normal;
    text-decoration: none;
    color: #fff;
}
ul,
li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
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
  max-width: 1366px;
  margin: 0 auto;
  background: url("assets/filter_space.svg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;

  .content-center-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 143px;
    text-align: center;
  }

  h3 {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
  }
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinoff {
    to {
      transform: rotate(-360deg);
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes antiRotation {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    h3 {
      font-size: 10px;
      line-height: 12px;
    }
    h4 {
      width: 296px;
      font-size: 16px;
      line-height: 19px;
    }
  }
  /* background: blue; */
`;
