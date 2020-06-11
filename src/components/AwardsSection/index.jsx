import PropTypes from "prop-types";
import { Item, Section } from "./styles";

export default function AwardsSection(props) {
  const { title, subtitle, item } = props;
  return (
    <Section>
      <div className="content-header">
        <div className="title">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className="border">
          <img src="assets/gradient.svg" />
        </div>
      </div>
      <div className="content-item">
        <div className="content-alignment-flex">
          {item.map((element, index) => {
            return (
              <Item key={index}>
                <div className="circle">
                  <strong id="years">{element.years}</strong>
                  <strong id="local">{element.local}</strong>
                  <strong id="awards">{element.awards}</strong>
                </div>
              </Item>
            );
          })}
        </div>
      </div>
      {/* <ParticlesBackGround /> */}
    </Section>
  );
}
AwardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
};
