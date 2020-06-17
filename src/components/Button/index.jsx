import PropTypes from "prop-types";
import { ButtonDefault } from "./styles";

export default function Button(props) {
  const { children, childrenColor, bgColor, bgHover, shadow, onClick } = props;

  return (
    <ButtonDefault
      background={bgColor}
      backgroundHover={bgHover}
      shadow={shadow}
      color={childrenColor}
      onClick={onClick}
    >
      {children}
    </ButtonDefault>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  bgHover: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  childrenColor: PropTypes.string,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
};
