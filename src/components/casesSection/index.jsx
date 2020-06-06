import { Cases, AllCases } from "./styles";

export default function CasesSection(props) {
  const { cases } = props;

  return (
    <>
      <div className="content-center-header">
        <h3>Cases</h3>
        <h4>Confira nossos últimos trabalhos</h4>
      </div>
      {cases.map((element, index) => (
        <Cases key={index} order={index % 2 == 0 ? "true" : "false"}>
          <div className="content-image">
            <img src="assets/image_case_default.png" alt="" />
          </div>
          <div className="content-description">
            <h5>UI, Front-end, back-end</h5>

            <h4>Leitor Pauteiro</h4>
            <div className="divider">
              <span>
                O leitor pauteiro é uma plataforma desenvolvida para o jornal
                Correio da Bahia, onde os seus leitores podem enviar sugestões
                de notícias ou fazer denúncias diretamente para a redação do
                jornal por meio de um chatbot a Rosa. Este projeto fez parte do
                prêmio Correio de Futuro do ano 2019.
              </span>
            </div>
            <div className="more-information">
              <label>mais informações</label>
              <img src="assets/case_more_information.svg" />
            </div>
          </div>
        </Cases>
      ))}
      <AllCases>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="description">
          <span>
            Conheça todos
            <br />
            nossos projetos
          </span>
          <img src="assets/case_more_information.svg" />
        </div>
      </AllCases>
    </>
  );
}
