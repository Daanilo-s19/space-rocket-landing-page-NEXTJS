import { Section } from "./styles";
import { useState } from "react";
export default function OurAbout(props) {
  const { item } = props;

  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    item.sort(() => Math.random() - 0.5);
    setTimeout(() => {
      setUpdate(!update);
    }, 15000);
  };
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
      <div className="orbit-one  paused">
        <div className="user top">
          <img src={item[1].imgUser} alt="img user" />
        </div>
        <div className="user left">
          <img src={item[2].imgUser} alt="img user" />
        </div>
        <div className="user right">
          <img src={item[3].imgUser} alt="img user" />
        </div>
        <div className="user bottom">
          <img src={item[4].imgUser} alt="img user" />
        </div>
        <div className="orbit-two">
          <div className="user top">
            <img src={item[5].imgUser} alt="img user" />
          </div>
          <div className="user left">
            <img src={item[6].imgUser} alt="img user" />
          </div>
          <div className="user right">
            <img src={item[7].imgUser} alt="img user" />
          </div>
          <div className="user bottom">
            <img src={item[8].imgUser} alt="img user" />
          </div>
          <div className="orbit-three">
            <div className="user top">
              <img src={item[9].imgUser} alt="img user" />
            </div>
            <div className="user left">
              <img src={item[10].imgUser} alt="img user" />
            </div>
            <div className="user right">
              <img src={item[11].imgUser} alt="img user" />
            </div>
            <div className="user bottom">
              <img src={item[12].imgUser} alt="img user" />
            </div>
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
        </div>
      </div>
      {handleUpdate()}
    </Section>
  );
}
