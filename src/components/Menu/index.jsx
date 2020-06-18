import { useState } from "react";
// import Link from "next/link";
import Form from "../Form";
import Button from "../Button";
import PropTypes from "prop-types";
import { Navbar, Dropdown } from "./styles";

export default function Menu(props) {
  const { item } = props;
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [form, setForm] = useState(false);
  return (
    <>
      <Navbar>
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
            <Button onClick={() => setForm(true)} bgHover="#552ee5">
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
      {menuDropdown && (
        <Dropdown onChange={(value) => setMenuDropdown(value)}>
          <div className="content"></div>
          <div className="opacity" onClick={() => onChange(false)}></div>
        </Dropdown>
      )}
      {form && <Form onChange={(value) => setForm(value)} />}
    </>
  );
}
Menu.propTypes = {
  item: PropTypes.object.isRequired,
};
