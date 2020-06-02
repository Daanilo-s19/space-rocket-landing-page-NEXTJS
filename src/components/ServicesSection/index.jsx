import { ItemService, Section } from "./styles";

export default function ServicesSection() {
  return (
    <Section>
      <div className="content-header-services">
        <h3>serviços</h3>
        <h4>A solução ideal para o seu negócio digital</h4>
      </div>
      <div className="content-item">
        <div className="content-alignment-grid">
          {" "}
          <ItemService>
            <img src="assets/union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>{" "}
          <ItemService>
            <img src="assets/union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>{" "}
          <ItemService>
            <img src="assets/union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>
        </div>
      </div>
    </Section>
  );
}
