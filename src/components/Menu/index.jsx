import { useState } from "react";
// import Link from "next/link";
import Form from "../Form";
import Button from "../Button";
import PropTypes from "prop-types";
import { Navbar, Dropdown } from "./styles";

export default function Menu(props) {
  const { item, onChange } = props;
  const [menuDropdown, setMenuDropdown] = useState(false);

  return (
    <>
      {!menuDropdown ? (
        <Navbar data-aos="fade-down">
          <div className="content">
            <div className="content-logo">
              <img src="assets/logo.svg" alt="logan" />
            </div>
            <div className="content-menu">
              {item.menu &&
                item.menu.map((item, index) => (
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                ))}
              <Button onClick={() => onChange(true)} bgHover="#552ee5">
                {item.button}
              </Button>
            </div>
            <div className="content-menu-responsive">
              <img
                src="assets/menu.svg"
                alt="menu"
                onClick={() => setMenuDropdown(true)}
              />
            </div>
          </div>
        </Navbar>
      ) : (
        <Dropdown onChange={(value) => setMenuDropdown(value)}>
          <div className="content">
            <div className="header">
              <img src="assets/logo.svg" id="logo" alt="logo" />
              <img
                src="assets/esc_menu.svg"
                id="menu"
                alt="menu"
                onClick={() => setMenuDropdown(false)}
              />
            </div>
            <div className="content-menu">
              {item.menu &&
                item.menu.map((item, index) => (
                  <a href={item.link} key={index}>
                    {item.name}
                  </a>
                ))}
            </div>
            <Button
              bgColor="#552ee5"
              childrenColor="#F0F4FA"
              shadow={true}
              bgHover="#3e22a3"
              onClick={() => onChange(true)}
            >
              {item.button}
            </Button>
          </div>
        </Dropdown>
      )}
    </>
  );
}
Menu.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
