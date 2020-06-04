import { Section, MethodItem } from "./styles";

export default function MethodSection(props) {
  return (
    <>
      <div className="content-center-header">
        <h3>Metodologia</h3>
        <h4 style={{ maxWidth: "551px" }}>
          Disponibilizamos de um processo simplificado do desenvolvimento da sua
          solução:
        </h4>
      </div>
      <Section>
        <div className="content">
          <div className="content-left">
            <MethodItem align="left">
              <div className="content-item">
                <div className="description">
                  <label className="id-item">01</label>
                  <label>Reunião Exploratória</label>
                </div>
                <div className="icon-item border-ellipse Stack-left">
                  <img src="assets/method01.svg" alt="" />
                </div>
              </div>
              <img id="line-one" src="assets/line01.svg" alt="" />
            </MethodItem>
            <MethodItem align="left">
              <div className="content-item">
                <div className="description">
                  <label className="id-item">01</label>
                  <label>Reunião Exploratória</label>
                </div>
                <div className="icon-item border-ellipse">
                  <img src="assets/method01.svg" alt="" />
                </div>
              </div>
              <img id="line-two" src="assets/line02.svg" alt="" />
            </MethodItem>
          </div>
          <div className="content-main">
            <div className="circle">
              <div className="play">
                <img src="assets/method_play.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="content-right">
            <MethodItem align="right">
              <img id="line-three" src="assets/line02.svg" alt="" />
              <div className="content-item">
                <div className="icon-item border-ellipse">
                  <img src="assets/method01.svg" alt="" />
                </div>
                <div className="description">
                  <label>Reunião Exploratória</label>
                  <label className="id-item">01</label>
                </div>
                <div className="content-item-legend">
                  <label>
                    Nessa etapa sua ideia será analisada a fundo onde será
                    estabelecido todas as etapas do fluxo do projeto para os
                    próximos passos.
                  </label>
                </div>
              </div>
            </MethodItem>
            <MethodItem align="right">
              <img id="line-four" src="assets/line04.svg" alt="" />
              <div className="content-item">
                <div className="icon-item border-ellipse">
                  <img src="assets/method01.svg" alt="" />
                </div>
                <div className="description">
                  <label>Reunião Exploratória</label>
                  <label className="id-item">01</label>
                </div>
              </div>
            </MethodItem>
          </div>
        </div>
      </Section>
      {/* <Section>
        <div className="content">
          <div className="content-left">
            <div className="method left">
              <div className="item item-left">
                <div>
                  <span id="id-item">01.</span>
                  <span>Reunião Exploratória</span>
                </div>
              </div>
              <div className="icon">
                <img src="assets/method01.svg" />
              </div>
              <div id="line-one">
                <img src="assets/line01.svg" />
              </div>
            </div>

            <div className="method left">
              <div className="item item-left">
                <div>
                  <span id="id-item">01.</span>
                  <span>Reunião Exploratória</span>
                </div>
              </div>
              <div className="icon">
                <img src="assets/method01.svg" />
              </div>
              <div id="line-two">
                <img src="assets/line02.svg" />
              </div>
            </div>
          </div>

          <div className="content-main"></div>

          <div className="content-left">
            <div className="method right">
              <div id="line-three">
                <img src="assets/line03.svg" />
              </div>
              <div className="icon">
                <img src="assets/method01.svg" />
              </div>
              <div className="item item-right">
                <div>
                  <span>Reunião Exploratória</span>
                  <span id="id-item">03.</span>
                </div>
              </div>
            </div>

            <div className="method right">
              <div id="line-four">
                <img src="assets/line04.svg" />
              </div>
              <div className="icon">
                <img src="assets/method01.svg" />
              </div>
              <div className="item item-right">
                <div>
                  <span>Reunião Exploratória</span>
                  <span id="id-item">04.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section> */}
    </>
  );
}
