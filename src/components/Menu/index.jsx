import Button from "../Button";
import PropTypes from "prop-types";
import { Navbar } from "./styles";

export default function Menu(props) {
  const { item } = props;
  return (
    <Navbar>
      <div className="content-logo">
        <img src="assets/logo.svg" />
      </div>
      <div className="content-menu">
        {item.menu.map((item, index) => (
          <a key={index}>{item}</a>
        ))}

        <Button>{item.button}</Button>
      </div>
    </Navbar>
  );
}
Menu.propTypes = {
  item: PropTypes.array.isRequired,
};
