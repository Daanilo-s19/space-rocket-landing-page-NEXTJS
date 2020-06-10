import SectionDefault from "../SectionDefault";
import { ItemService } from "./styles";

export default function ServicesSection() {
  return (
    <>
      <SectionDefault
        title="serviços"
        subtitle="A solução ideal para o seu negócio digital"
      >
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
      </SectionDefault>
    </>
  );
}
