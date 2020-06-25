import { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import Form from "../../components/Form";
import CasesSection from "../../components/casesSection";
import Footer from "../../components/Footer";
import useI18n from "../../hooks/use-i18n";
import { Container } from "../../../styles";
import en from "../../locales/Cases/en.json";
import pt from "../../locales/Cases/pt.json";

export default function Cases() {
  const i18n = useI18n();
  const [form, setForm] = useState(false);

  useEffect(() => {
    if (navigator.language) {
      i18n.locale("", navigator.language === "pt-BR" ? pt : en);
    } else i18n.locale("", en);
  }, []);

  return (
    <>
      <Menu
        item={{
          button: i18n.t("menu.item.button"),
          menu: i18n.t("menu.item.menu"),
        }}
        onChange={(value) => setForm(value)}
      />
      {form && <Form onChange={(value) => setForm(value)} />}
      <Container>
        <Hero
          activeButton={false}
          title={i18n.t("hero.title")}
          subtitle={i18n.t("hero.subtitle")}
          textButton={i18n.t("hero.button")}
          onChange={(value) => setForm(value)}
        />

        <CasesSection
          pageCases={true}
          title={i18n.t("casesSection.title")}
          subtitle={i18n.t("casesSection.subtitle")}
          clients={i18n.t("casesSection.clients")}
          allCases={
            <>
              {i18n.t("casesSection.allCases.parte1")}
              <br />
              {i18n.t("casesSection.allCases.parte2")}
            </>
          }
          cases={i18n.t("casesSection.item")}
        />
      </Container>
      <Footer item={i18n.t("footer.item")} />
    </>
  );
}
