import { useEffect } from "react";
import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import AwardsSection from "../../components/AwardsSection";
import ServicesSection from "../../components/ServicesSection";
import MethodSection from "../../components/methodSection";
import useI18n from "../../hooks/use-i18n";
import en from "../../locales/en.json";
import pt from "../../locales/pt.json";

export default function Home() {
  const i18n = useI18n();

  useEffect(() => {
    if (navigator.language) {
      i18n.locale("", navigator.language === "pt-BR" ? pt : en);
    } else i18n.locale("", en);
  }, []);

  return (
    <>
      <Menu />

      <Hero
        title={i18n.t("hero.title")}
        subtitle={i18n.t("hero.subtitle")}
        textButton={i18n.t("hero.button")}
      />
      <AwardsSection />
      <ServicesSection />
      <MethodSection />
    </>
  );
}
