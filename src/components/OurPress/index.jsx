import SectionDefault from "../SectionDefault";
import { ItemPress } from "./styles";
import AboutMore from "../AboutMore";

export default function PressSection(props) {
  return (
    <SectionDefault title="Press" subtitle="Aonde saimos na mídia">
      <ItemPress>
        <div className="content-image">
          <div className="filter" />
        </div>
        <div className="content">
          <label>Leitor pauteiro: vencedor do Correio de...</label>
          <p>
            A ideia é que você, leitor, possa enviar sugestões de pautas e
            acumule pontos pelas ideias. Um robô organizará as propostas e
            oferecerá as melhores opções para o repórter, a depender da
            editoria...
          </p>
          <AboutMore title="materia completa" />
        </div>
      </ItemPress>
      <ItemPress>
        <div className="content-image">
          <div className="filter" />
        </div>
        <div className="content">
          <label>Leitor pauteiro: vencedor do Correio de...</label>
          <p>
            A ideia é que você, leitor, possa enviar sugestões de pautas e
            acumule pontos pelas ideias. Um robô organizará as propostas e
            oferecerá as melhores opções para o repórter, a depender da
            editoria...
          </p>
          <AboutMore title="materia completa" />
        </div>
      </ItemPress>{" "}
      <ItemPress>
        <div className="content-image">
          <div className="filter" />
        </div>
        <div className="content">
          <label>Leitor pauteiro: vencedor do Correio de...</label>
          <p>
            A ideia é que você, leitor, possa enviar sugestões de pautas e
            acumule pontos pelas ideias. Um robô organizará as propostas e
            oferecerá as melhores opções para o repórter, a depender da
            editoria...
          </p>
          <AboutMore title="materia completa" />
        </div>
      </ItemPress>
    </SectionDefault>
  );
}
