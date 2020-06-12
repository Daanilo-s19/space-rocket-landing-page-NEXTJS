import PropTypes from "prop-types";
import { Cases, AllCases } from "./styles";
import AboutMore from "../AboutMore";

export default function CasesSection(props) {
  const { title, subtitle, cases, allCases } = props;

  return (
    <>
      <div className="content-center-header">
        <h3>Cases</h3>
        <h4>Confira nossos últimos trabalhos</h4>
      </div>
      {cases &&
        cases.map((element, index) => (
          <Cases key={index} order={index % 2 == 0 ? "true" : "false"}>
            <div className="content-image">
              <img src={element.img} alt="" />
            </div>
            <div className="content-description">
              <h5>{element.tag}</h5>

              <h4>{element.title}</h4>
              <div className="divider">
                <span>{element.description}</span>
              </div>
              <AboutMore title=" Mais Informações" />
            </div>
          </Cases>
        ))}
      {/* <AllCases>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="project">
          <img src="assets/google_grey.svg" />
        </div>
        <div className="description">
          <span>{allCases}</span>
          <img src="assets/case_more_information.svg" />
        </div>
      </AllCases> */}
    </>
  );
}
CasesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cases: PropTypes.array.isRequired,
};
