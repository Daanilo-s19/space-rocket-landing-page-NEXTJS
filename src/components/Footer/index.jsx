import SocialMedia from "../SocialMedia";
import { Footerdefault, BorderTop } from "./styles";

export default function Footer(props) {
  const { item, designer, tag } = props;
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
              {item.menu &&
                item.menu.map((item, index) => <a key={index}>{item}</a>)}
            </div>
            <div className="content-tag">
              <div>{item.tag}</div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2020 Space Rocket.</span>
          <span>{item.designer}</span>
        </div>
      </Footerdefault>
    </>
  );
}
