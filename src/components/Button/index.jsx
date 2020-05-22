import PropTypes from "prop-types";
import { ButtonDefault } from "./styles";

export default function Button(props) {
  const { children, childrenColor, bgColor, shadow } = props;

  return (
    <ButtonDefault background={bgColor} shadow={shadow} color={childrenColor}>
      <span>{children}</span>
    </ButtonDefault>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  childrenColor: PropTypes.string,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
};
