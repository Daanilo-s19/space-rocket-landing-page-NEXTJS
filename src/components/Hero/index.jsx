import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  const { title, subtitle, textButton, activeButton, onChange } = props;
  return (
    <>
      <Header data-aos="fade-up">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        {activeButton && (
          <Button
            bgColor="#552ee5"
            childrenColor="#F0F4FA"
            shadow={true}
            bgHover="#3e22a3"
            onClick={() => onChange(true)}
          >
            {textButton}
          </Button>
        )}
      </Header>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  activeButton: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
