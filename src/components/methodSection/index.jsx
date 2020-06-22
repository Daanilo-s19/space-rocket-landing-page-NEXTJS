import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import { Section, MethodItem } from "./styles";

export default function MethodSection(props) {
  const { title, subtitle, method } = props;
  const [play, setPlay] = useState(false);

  return (
    <>
      <div className="content-center-header" data-aos="fade-up">
        <h3>{title}</h3>
        <h4 style={{ maxWidth: "556px" }}>{subtitle}</h4>
      </div>
      <Section>
        <div className="content" data-aos="zoom-in-up">
          <div className="content-left">
            <MethodItem align="left">
              <div className="content-item">
                <div className="description">
                  <label className="id-item">01</label>
                  <label>{method.method01.title}</label>
                </div>
                <div className="icon-item border-ellipse Stack-left">
                  <img src={method.method01.img} alt="method" />
                </div>
                <div className="content-item-legend">
                  <label>{method.method01.description}</label>
                </div>
              </div>
              <div id="line-top">
                <img src="assets/line01.svg" alt="line" />
              </div>
            </MethodItem>
            <MethodItem align="left">
              <div className="content-item">
                <div className="description">
                  <label className="id-item">02</label>
                  <label>{method.method02.title}</label>
                </div>
                <div className="icon-item border-ellipse">
                  <img src={method.method02.img} alt="method" />
                </div>
                <div className="content-item-legend">
                  <label>{method.method02.description}</label>
                </div>
              </div>
              <div id="line">
                <img src="assets/line02.svg" alt="line" />
              </div>
            </MethodItem>
          </div>

          <div className="content-main ">
            <div className="circle">
              <div className="play" onClick={() => setPlay(true)}>
                <img src="assets/method_play.svg" alt="method" />
              </div>
            </div>
          </div>
          <div className="content-right">
            <MethodItem align="right">
              <div id="line-top">
                <img id="line" src="assets/line02.svg" alt="line" />
              </div>
              <div className="content-item">
                <div className="icon-item border-ellipse">
                  <img src={method.method03.img} alt="method" />
                </div>
                <div className="description">
                  <label>{method.method03.title}</label>
                  <label className="id-item">03</label>
                </div>
                <div className="content-item-legend">
                  <label>{method.method03.description}</label>
                </div>
              </div>
            </MethodItem>
            <MethodItem align="right">
              <img id="line" src="assets/line04.svg" alt="line" />
              <div className="content-item">
                <div className="icon-item border-ellipse">
                  <img src={method.method04.img} alt="method" />
                </div>
                <div className="description">
                  <label>{method.method04.title}</label>
                  <label className="id-item">04</label>
                </div>
                <div className="content-item-legend">
                  <label>{method.method04.description}</label>
                </div>
              </div>
            </MethodItem>
          </div>
        </div>
      </Section>
      {play && (
        <Modal onChange={(value) => setPlay(value)}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6raPNl-mfaI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      )}
    </>
  );
}

MethodSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  method: PropTypes.object.isRequired,
};
