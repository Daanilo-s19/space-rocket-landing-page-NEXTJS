import Button from "../Button";
import Form from "../Form";
import PropTypes from "prop-types";
import { Header } from "./styles";
import { useState } from "react";
import { bool } from "yup";

export default function Hero(props) {
  const [form, setForm] = useState(false);
  const { title, subtitle, textButton, activeButton } = props;
  return (
    <Header data-aos="fade-up">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      {activeButton && (
        <Button
          bgColor="#552ee5"
          childrenColor="#F0F4FA"
          shadow={true}
          bgHover="#3e22a3"
          onClick={() => setForm(true)}
        >
          {textButton}
        </Button>
      )}
      {form && <Form onChange={(value) => setForm(value)} />}
    </Header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  activeButton: PropTypes.bool.isRequired,
};
