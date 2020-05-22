import { Section } from "./styles";
import ItemAwards from "../AwardsItem";
import ParticlesBackGround from "../Particles";

export default function AwardsSection() {
  return (
    <Section>
      <div className="content-header">
        <div className="title">
          <h3>Premiações</h3>
          <strong>Reconhecimento de muito trabalho</strong>
        </div>
        <div className="border">
          <img src="assets/gradient.svg" />
        </div>
      </div>
      <div className="content-item">
        <div>
          <ItemAwards />
          <ItemAwards />
          <ItemAwards />
          <ItemAwards />
          <ItemAwards />
        </div>
      </div>
      <ParticlesBackGround />
    </Section>
  );
}
