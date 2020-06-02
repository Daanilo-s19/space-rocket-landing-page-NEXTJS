// import ItemAwards from "../ARQ";
// import ParticlesBackGround from "../Particles";
import { Item, Section } from "./styles";

export default function AwardsSection() {
  return (
    <Section>
      <div className="content-header">
        <div className="title">
          <h3>Premiações</h3>
          <h4>Reconhecimento de muito trabalho</h4>
        </div>
        <div className="border">
          <img src="assets/gradient.svg" />
        </div>
      </div>
      <div className="content-item">
        <div className="content-alignment-flex">
          <Item>
            <div className="circle">
              <strong id="years">2018</strong>
              <strong id="local">Desafios Bahia Mercado Agri</strong>
              <strong id="awards">1 lugar</strong>
            </div>
          </Item>
          <Item>
            <div className="circle">
              <strong id="years">2018</strong>
              <strong id="local">Desafios Bahia Mercado Agri</strong>
              <strong id="awards">1 lugar</strong>
            </div>
          </Item>
          <Item>
            <div className="circle">
              <strong id="years">2018</strong>
              <strong id="local">Desafios Bahia Mercado Agri</strong>
              <strong id="awards">1 lugar</strong>
            </div>
          </Item>{" "}
          <Item>
            <div className="circle">
              <strong id="years">2018</strong>
              <strong id="local">Desafios Bahia Mercado Agri</strong>
              <strong id="awards">1 lugar</strong>
            </div>
          </Item>{" "}
          <Item>
            <div className="circle">
              <strong id="years">2018</strong>
              <strong id="local">Desafios Bahia Mercado Agri</strong>
              <strong id="awards">1 lugar</strong>
            </div>
          </Item>
        </div>
      </div>
      {/* <ParticlesBackGround /> */}
    </Section>
  );
}
