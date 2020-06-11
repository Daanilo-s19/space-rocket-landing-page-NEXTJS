import SocialMedia from "../SocialMedia";
import { Footerdefault, BorderTop } from "./styles";

export default function Footer(props) {
  return (
    <>
      <BorderTop>
        <img src="assets/line_top_footer.svg" />
      </BorderTop>
      <Footerdefault>
        <div className="header">
          <img src="assets/slogan.svg" />
          <div className="content">
            <SocialMedia />
            <div className="content-menu">
              <a>Cases</a>
              <a>Serviços</a>
              <a>Sobre nós</a>
              <a>Trabalho Conosco</a>
              <a>Blog</a>
            </div>
            <div className="content-tag">
              <div>Estamos contratando!</div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2020 Space Rocket.</span>
          <span>Design por Guilherme Cavalcante</span>
        </div>
      </Footerdefault>
    </>
  );
}
