import { useEffect } from "react";
import Menu from "../../components/Menu";
import Hero from "../../components/Hero";
import OurAbout from "../../components/OurAbout";
import BannerStarted from "../../components/BannerStarted";
import Footer from "../../components/Footer";
import useI18n from "../../hooks/use-i18n";
import { Container } from "../../../styles";
import en from "../../locales/About/en.json";
import pt from "../../locales/About/pt.json";

export default function Cases() {
  const i18n = useI18n();

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
      />
      <Container>
        <OurAbout
          item={[
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "Gloria",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "1",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "2",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "3",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "4",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "5",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "6",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "Gloria",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "7",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "8",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "9",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "10",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "11",
              description: " olá mundo",
            },
            {
              ImgUser: "assets/comments/gloria_canto.jpeg",
              name: "12",
              description: " olá mundo",
            },
          ]}
        />
        <BannerStarted
          title={i18n.t("bannerStarted.title")}
          subtitle={i18n.t("bannerStarted.subtitle")}
          button={i18n.t("bannerStarted.button")}
        />
      </Container>
      <Footer item={i18n.t("footer.item")} />
    </>
  );
}
