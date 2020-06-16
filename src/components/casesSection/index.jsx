import PropTypes from "prop-types";
import Link from "next/link";
import { Cases, AllCases } from "./styles";
import AboutMore from "../AboutMore";

export default function CasesSection(props) {
  const { title, subtitle, cases, allCases, pageCases, clients } = props;

  return (
    <>
      {!pageCases && (
        <div className="content-center-header">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
      )}

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
      {pageCases && (
        <div className="content-center-header">
          <h4
            style={{
              marginBottom: "56px",
              fontSize: "32px",
              lineHeight: "38px",
            }}
          >
            {clients}
          </h4>
        </div>
      )}
      <AllCases pageCases={pageCases}>
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
        {pageCases && (
          <>
            <div className="project">
              <img src="assets/google_grey.svg" />
            </div>
            <div className="project">
              <img src="assets/google_grey.svg" />
            </div>
          </>
        )}
        {!pageCases && (
          <div className="description">
            <Link href="/Cases">
              <span>{allCases}</span>
            </Link>
            <img src="assets/case_more_information.svg" />
          </div>
        )}
      </AllCases>
    </>
  );
}
CasesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cases: PropTypes.array.isRequired,
  pageCases: PropTypes.bool.isRequired,
  clients: PropTypes.string,
};
