import Button from "../Button";
import PropTypes from "prop-types";
import { Header } from "./styles";

export default function Hero(props) {
  return (
    <Header>
      <h1>Criamos, desenvolvemos e gerenciamos produtos digitais.</h1>
      <h2>
        Impulsionamos seu negócio através da tecnologia, desenvolvendo soluções
        digitais exclusivas para seu empreendimento.
      </h2>
      <Button bgColor="#552EE5" childrenColor="#F0F4FA" shadow={true}>
        Comece um projeto
      </Button>
    </Header>
  );
}

// Hero.propTypes = {
//   title: PropTypes.string.isRequired,
//   Subtitle: PropTypes.string.isRequired,
// };
