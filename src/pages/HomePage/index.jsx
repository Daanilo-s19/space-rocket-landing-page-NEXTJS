import { useEffect } from "react";
import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import AwardsSection from "../../components/AwardsSection";
import ServicesSection from "../../components/OurServices";
import MethodSection from "../../components/methodSection";
import CasesSection from "../../components/casesSection";
import CommentsSection from "../../components/CommentsSection";
import PressSection from "../../components/OurPress";
import BlogSection from "../../components/OurBlog";
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
      <CasesSection cases={[0, 1, 2]} />
      <CommentsSection
        comments={[
          {
            imageUser: "assets/user_default.svg",
            name: "Nilson",
            role: "(Médico Nutrologista) - Data And Nutrition",
            comments:
              "Gosto sempre de trabalhar com a turma. Sempre fazem um bom trabalho e as coisas funcionam bem.",
          },
          {
            imageUser: "assets/user_default.svg",
            name: "Danilo",
            role: "Dev",
            comments: "Os caras são fodas d++",
          },
          {
            imageUser: "assets/user_default.svg",
            name: "José",
            role: "Dev",
            comments: "Bacaaana",
          },
        ]}
      />
      <PressSection />
      <BlogSection blog={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
    </>
  );
}
