import { Section } from "./styles";
import { useState } from "react";
export default function OurAbout(props) {
  const [paused, setPaused] = useState(false);
  return (
    <Section>
      <div className="content-header">
        <div className="header">
          <img id="slogan" src="assets/slogan.svg" alt="slogan" />
          <img src="assets/ellipse_about.svg" id="ellipse" />
        </div>
        <div className="description">
          <p>
            Somos uma startup de tecnologia com a missão de impactar milhões de
            pessoas em diferentes mercados por meio de experiências incríveis.
            Construímos aplicativos e sistemas de escala mundial com qualidade e
            agilidade.
          </p>
          <br />
          <p>
            Surgimos para desburocratizar o desenvolvimento de software,
            proporcionando a você as soluções customizadas que possam alavancar
            as suas vendas ou melhorar seus processos.
          </p>
          <br />
          <p>
            Focamos sempre em entregar soluções eficientes e eficazes, tudo com
            o nosso toque Space Rocket de ser, sempre com o propósito de
            impulsionar o seu empreendimento.
          </p>
          <br />
        </div>
      </div>
      <div className={paused ? "orbit-one  paused" : "orbit-one "}>
        <div
          onMouseOver={() => setPaused(true)}
          onMouseOut={() => setPaused(false)}
          className="user top"
        >
          <img src="assets/comments/gloria_canto.jpeg" />
        </div>
        <div className="center">
          <div
            onMouseOver={() => setPaused(true)}
            onMouseOut={() => setPaused(false)}
            className="user left"
          >
            <img src="assets/comments/gloria_canto.jpeg" />
          </div>
          <div className="orbit-two">
            <div
              onMouseOver={() => setPaused(true)}
              onMouseOut={() => setPaused(false)}
              className="user top"
            >
              <img src="assets/comments/gloria_canto.jpeg" />
            </div>
            <div className="center">
              <div
                onMouseOver={() => setPaused(true)}
                onMouseOut={() => setPaused(false)}
                className="user left"
              >
                <img src="assets/comments/gloria_canto.jpeg" />
              </div>
              <div className="orbit-three">
                <div
                  onMouseOver={() => setPaused(true)}
                  onMouseOut={() => setPaused(false)}
                  className="user top"
                >
                  <img src="assets/comments/gloria_canto.jpeg" />
                </div>
                <div className="center">
                  <div
                    onMouseOver={() => setPaused(true)}
                    onMouseOut={() => setPaused(false)}
                    className="user left"
                  >
                    <img src="assets/comments/gloria_canto.jpeg" />
                  </div>
                  <div className="">
                    <div className="content">
                      <div></div>
                      <div className="content-main">
                        <div className="circle">
                          <span>Trabalhe conosco</span>
                          <img
                            src="assets/case_more_information.svg"
                            alt="trabelhe conosco"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div
                    onMouseOver={() => setPaused(true)}
                    onMouseOut={() => setPaused(false)}
                    className="user right"
                  >
                    <img src="assets/comments/gloria_canto.jpeg" />
                  </div>
                </div>
                <div
                  onMouseOver={() => setPaused(true)}
                  onMouseOut={() => setPaused(false)}
                  className="user bottom"
                >
                  {" "}
                  <img src="assets/comments/gloria_canto.jpeg" />
                </div>
              </div>
              <div
                onMouseOver={() => setPaused(true)}
                onMouseOut={() => setPaused(false)}
                className="user right"
              >
                {" "}
                <img src="assets/comments/gloria_canto.jpeg" />
              </div>
            </div>
            <div
              onMouseOver={() => setPaused(true)}
              onMouseOut={() => setPaused(false)}
              className="user bottom"
            >
              <img src="assets/comments/gloria_canto.jpeg" />
            </div>
          </div>
          <div
            onMouseOver={() => setPaused(true)}
            onMouseOut={() => setPaused(false)}
            className="user right"
          >
            <img src="assets/comments/gloria_canto.jpeg" />
          </div>
        </div>
        <div
          onMouseOver={() => setPaused(true)}
          onMouseOut={() => setPaused(false)}
          className="user bottom"
        >
          <img src="assets/comments/gloria_canto.jpeg" />
        </div>
      </div>
    </Section>
  );
}
