import { useEffect } from "react";
import { Content } from "./styles";
import Router from "next/router";
import SocialMedia from "../SocialMedia";

export default function SplashScreen() {
  return (
    <>
      <Content>
        <div id="line-top">
          <img src="assets/line_top_splash.svg" alt="line splash" />
        </div>
        <div id="logo">
          <img src="assets/space_rocket_logo_splash.svg" alt="logo splash" />
          <label>Carregando</label>
          <div className="loading">
            <div id="dot-one"></div>
            <div id="dot-two"></div>
            <div id="dot-three"></div>
          </div>
        </div>
        <div id="line-bottom">
          <img src="assets/line_bottom_splash.svg" alt="line botto" />
        </div>
      </Content>
    </>
  );
}
