import PropTypes from "prop-types";
import { ButtonDefault } from "./styles";

export default function Button(props) {
  const { children, childrenColor, bgColor, bgHover, shadow } = props;

  return (
    <ButtonDefault
      background={bgColor}
      backgroundHover={bgHover}
      shadow={shadow}
      color={childrenColor}
    >
      {children}
    </ButtonDefault>
  );
}

Button.propTypes = {
  background: PropTypes.string.isRequired,
  bgHover: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  childrenColor: PropTypes.string,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
};
