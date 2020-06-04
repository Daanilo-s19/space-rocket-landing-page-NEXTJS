import { ItemService, Section } from "./styles";

export default function ServicesSection() {
  return (
    <>
      <div className="content-center-header">
        <h3>serviços</h3>
        <h4>A solução ideal para o seu negócio digital</h4>
      </div>
      <Section>
        <div className="content-item">
          {" "}
          <ItemService>
            <img src="assets/Union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>{" "}
          <ItemService>
            <img src="assets/Union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>{" "}
          <ItemService>
            <img src="assets/Union.svg" />
            <strong>Aplicativos</strong>
            <span>
              Construímos aplicativos personalizados para seu empreendimento,
              soluções exclusivas para dispositivos Android e IOS.
            </span>
          </ItemService>
        </div>
      </Section>
    </>
  );
}
