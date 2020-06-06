import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import AwardsSection from "../../components/AwardsSection";
import ServicesSection from "../../components/ServicesSection";
import MethodSection from "../../components/methodSection";
import { i18n, withTranslation } from "../../../i18n";

function Home({ t }) {
  return (
    <>
      <Menu />
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")
        }
      >
        BR
      </button>
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")
        }
      >
        ENG
      </button>
      <Hero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        button={t("hero.button")}
      />
      <AwardsSection />
      <ServicesSection />
      <MethodSection />
    </>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
