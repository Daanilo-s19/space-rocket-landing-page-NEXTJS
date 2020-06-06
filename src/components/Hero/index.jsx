import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  const { title, subtitle, button } = props;
  return (
    <Header>
      <h1>{title}</h1>

      <h2>{subtitle}</h2>
      <Button bgColor="#552EE5" childrenColor="#F0F4FA" shadow={true}>
        {button}
      </Button>
    </Header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};
