import { Section } from "./styles";

export default function MethodSection(props) {
  return (
    <Section>
      <div className="content-center-header">
        <h3>Metodologia</h3>
        <h4 style={{ maxWidth: "551px", textAlign: "center" }}>
          Disponibilizamos de um processo simplificado do desenvolvimento da sua
          solução:
        </h4>
        <div className="content-section">
          <div className="content-left">
            <div className="item">
              <div>
                <span id="id-method">01</span>
                <span>Reunião Exploratória</span>
              </div>
              <div className="icon">
                <img src="assets/method01.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
