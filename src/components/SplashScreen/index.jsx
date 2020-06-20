import { useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";
import SocialMedia from "../SocialMedia";

export default function SplashScreen() {
  return (
    <>
      <Content>
        <img src="assets/line_top_splash.svg" id="line-top" alt="line splash" />
        <div id="logo">
          <img src="assets/space_rocket_logo_splash.svg" alt="logo splash" />
          <label>Carregando...</label>
        </div>
        <img
          src="assets/line_bottom_splash.svg"
          id="line-bottom"
          alt="line botto"
        />
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
  padding: 88px 0;

  #line-top {
    margin-left: 53%;
    margin-bottom: -58px;
    /* margin-right: 369px;*/

    justify-self: end;
  }
  #line-bottom {
    margin-left: 23%;
    /* margin-left: 346px; */
    justify-self: start;
    align-self: end;
  }
  #logo {
    width: 100%;
    justify-self: center;
    display: grid;
    grid-auto-rows: auto;
    justify-items: center;

    img {
      width: 100%;
      max-width: 378.89px;
      height: 88px;
    }

    label {
      margin: -10px 0 59px 200px;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.525em;
      text-transform: uppercase;
      opacity: 0.4;
    }
  }
  .footer {
    margin-top: -104px;
    width: 100%;
    justify-self: center;
    display: grid;
    grid-auto-rows: auto;
    justify-items: center;
    row-gap: 12px;

    label {
      font-size: 16px;
      line-height: 19px;
      opacity: 0.4;

      &:last-child {
        margin-top: 12px;
      }
    }

    .social-media {
      display: grid;
      grid-template-columns: repeat(6, 40px);
      column-gap: 20px;
      margin-bottom: 12px;
      a {
        width: 100%;
        max-width: 40px;
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background: ${({ theme }) => theme.background.secundary};
          border: 1px solid rgba(255, 255, 255, 1);
        }
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    #line-top {
      margin-left: 0;
    }
    #line-bottom {
      margin: 0;
    }
    #logo {
      img {
        width: 80%;
      }
      label {
        margin: -10px 0 59px 100px;
        font-size: 12px;
      }
    }
    .footer {
      margin: 0 auto;
    }
  }
`;
