import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import SplashScreen from "../components/SplashScreen";
import AwardsSection from "../components/AwardsSection";
import ServicesSection from "../components/OurServices";
import MethodSection from "../components/methodSection";
import CasesSection from "../components/casesSection";
import CommentsSection from "../components/CommentsSection";
import PressSection from "../components/OurPress";
import BlogSection from "../components/OurBlog";
import BannerStarted from "../components/BannerStarted";
import Footer from "../components/Footer";
import useI18n from "../hooks/use-i18n";
import { Container } from "../../styles";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

export default function Home() {
  const i18n = useI18n();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (navigator.language) {
      i18n.locale("", navigator.language === "pt-BR" ? pt : en);
    } else i18n.locale("", en);
  }, []);

  return loading ? (
    <SplashScreen description={i18n.t("homepage.splashScreen")} />
  ) : (
    <>
      <Menu
        item={{
          button: i18n.t("homepage.menu.item.button"),
          menu: i18n.t("homepage.menu.item.menu"),
        }}
      />
      <Container>
        <Hero
          activeButton={true}
          title={i18n.t("homepage.hero.title")}
          subtitle={i18n.t("homepage.hero.subtitle")}
          textButton={i18n.t("homepage.hero.button")}
        />
        <AwardsSection
          title={i18n.t("homepage.awardsSection.title")}
          subtitle={i18n.t("homepage.awardsSection.subtitle")}
          item={i18n.t("homepage.awardsSection.item")}
        />
        <ServicesSection
          title={i18n.t("homepage.ServicesSection.title")}
          subtitle={i18n.t("homepage.ServicesSection.subtitle")}
          item={i18n.t("homepage.ServicesSection.item")}
        />
        <MethodSection
          title={i18n.t("homepage.methodSection.title")}
          subtitle={i18n.t("homepage.methodSection.subtitle")}
          method={{
            method01: {
              img: "assets/method01.svg",
              title: i18n.t("homepage.methodSection.method.method01.title"),
              description: i18n.t(
                "homepage.methodSection.method.method01.description"
              ),
            },
            method02: {
              img: "assets/method02.svg",
              title: i18n.t("homepage.methodSection.method.method02.title"),
              description: i18n.t(
                "homepage.methodSection.method.method02.description"
              ),
            },
            method03: {
              img: "assets/method03.svg",
              title: i18n.t("homepage.methodSection.method.method03.title"),
              description: i18n.t(
                "homepage.methodSection.method.method03.description"
              ),
            },
            method04: {
              img: "assets/method04.svg",
              title: i18n.t("homepage.methodSection.method.method04.title"),
              description: i18n.t(
                "homepage.methodSection.method.method04.description"
              ),
            },
          }}
        />
        <CasesSection
          pageCases={false}
          title={i18n.t("homepage.casesSection.title")}
          subtitle={i18n.t("homepage.casesSection.subtitle")}
          allCases={
            <>
              {i18n.t("homepage.casesSection.allCases.parte1")}
              <br />
              {i18n.t("homepage.casesSection.allCases.parte2")}
            </>
          }
          cases={i18n.t("homepage.casesSection.item")}
        />
        <CommentsSection
          title={i18n.t("homepage.commentsSection.title")}
          subtitle={i18n.t("homepage.commentsSection.subtitle")}
          comments={i18n.t("homepage.commentsSection.item")}
        />
        <PressSection
          title={i18n.t("homepage.pressSection.title")}
          subtitle={i18n.t("homepage.pressSection.subtitle")}
          more={i18n.t("homepage.pressSection.more")}
          item={i18n.t("homepage.pressSection.item")}
        />
        <BlogSection
          title={i18n.t("homepage.blogSection.title")}
          subtitle={i18n.t("homepage.blogSection.subtitle")}
          more={i18n.t("homepage.blogSection.more")}
          blog={i18n.t("homepage.blogSection.item")}
        />
        <BannerStarted
          title={i18n.t("homepage.bannerStarted.title")}
          subtitle={i18n.t("homepage.bannerStarted.subtitle")}
          button={i18n.t("homepage.bannerStarted.button")}
        />
      </Container>
      <Footer item={i18n.t("homepage.footer.item")} />
    </>
  );
}
