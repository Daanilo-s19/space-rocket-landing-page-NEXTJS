import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  const { title, subtitle, textButton } = props;
  return (
    <Header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Button bgColor="#552EE5" childrenColor="#F0F4FA" shadow={true}>
        {textButton}
      </Button>
    </Header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};
