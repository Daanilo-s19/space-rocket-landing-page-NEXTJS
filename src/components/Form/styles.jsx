import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: scroll;
  overflow-x: hidden;
  transition: 1s;
  top: 0;
  z-index: 99999;
  -webkit-transition: opacity 100ms ease-in;
  -moz-transition: opacity 100ms ease-in;
  transition: opacity 100ms ease-in;

  display: grid;
  grid-template-columns: 1fr minmax(auto, 571px);
  .opacity {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
  }

  .content {
    padding: 56px 48px;
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 10px 0px 10px rgba(22, 16, 65, 0.3);
  }

  .header {
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin-bottom: 64px;

    .esc {
      grid-column: 2/3;
      grid-row: 1/3;
      cursor: pointer;

      justify-self: end;
      width: 40px;
      height: 40px;
      border: 1px solid rgba(85, 46, 229, 0.2);
      border-radius: 50%;
      display: flex;
      justify-content: center;
    }
    h4 {
      grid-column: 1/2;
      color: #202c3d;
      margin-bottom: 12px;
    }
    span {
      grid-column: 1/2;
      font-size: 14px;
      line-height: 16px;
      color: #53647a;
    }
  }

  .content-button {
    margin: 16px 0 48px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 12px;

    .active-button {
      color: #fff;
      background: #161041;
    }

    button {
      box-sizing: border-box;
      padding: 12px 24px;
      border: 1px solid #ebeff5;
      border-radius: 100px;
      background: #ffffff;
      color: #53647a;
      font-size: 10px;
      line-height: 12px;
      font-weight: bold;
      transition: 500ms;

      &:hover {
        color: #ffffff;
        background: #161041;
      }
    }
  }
  form {
    display: grid;
    grid-template-rows: repeat(6, auto);
    gap: 24px;

    .content-input {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      button {
        justify-self: end;
      }
    }

    label {
      margin-top: 40px;
      margin-bottom: -8px;
    }
    input,
    textarea {
      height: 46px;
      padding: 12px 16px;
      background: #ffffff;
      border: 1px solid #ebeff5;
      box-sizing: border-box;
      border-radius: 8px;

      font-size: 12px;
      line-height: 22px;
      color: #53647a;
      &::placeholder {
        font-size: 12px;
        line-height: 22px;
        color: #53647a;
      }

      &:hover {
        border: 1px solid ${({ theme }) => theme.colorsButton.primary};
      }
    }
    textarea {
      resize: none;
      height: 100px;
    }

    span {
      font-size: 12px;
      line-height: 16px;
      color: #53647a;
    }
    button {
      width: 100%;
      max-width: 151px;
      height: 44px;
      background: ${({ theme }) => theme.colorsButton.primary};
      box-shadow: 0px 10px 25px rgba(85, 46, 229, 0.32);
      border-radius: 100px;
      color: #fff;
    }
  }

  .error {
    transition: 1s;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  .error-label {
    transition: 1s;
    color: ${({ theme }) => theme.colors.primary};
  }

  label {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #202c3d;
  }
`;
