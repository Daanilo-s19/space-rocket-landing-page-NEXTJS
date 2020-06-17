import { useState } from "react";
// import Link from "next/link";
import Form from "../Form";
import Button from "../Button";
import PropTypes from "prop-types";
import { Navbar } from "./styles";

export default function Menu(props) {
  const { item } = props;
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
            <img src="assets/menu.svg" alt="menu" />
          </div>
        </div>
      </Navbar>
      {form && <Form onChange={(value) => setForm(value)} />}
    </>
  );
}
Menu.propTypes = {
  item: PropTypes.object.isRequired,
};
