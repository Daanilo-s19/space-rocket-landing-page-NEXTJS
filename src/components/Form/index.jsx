import PropTypes from "prop-types";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useState } from "react";

export default function Form(props) {
  const { onChange } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [buttonError, setButtonError] = useState(false);
  const onSubmit = (data) => {
    if (project === "" && price === "") {
      setButtonError(true);
    } else console.log(data);
  };

  return (
    <Container>
      <div className="opacity" onClick={() => onChange(false)}></div>
      <div className="content">
        <div className="header">
          <h4>Quer criar um projeto com a Space?</h4>
          <span>
            A equipe está aberta para suas idéias,
            <br /> perguntas e necessidades.
          </span>
          <div className="esc" onClick={() => onChange(false)}>
            <img src="assets/esc_form.svg" alt="esc form" />
          </div>
        </div>
        <label className={buttonError && project === "" && "error-label"}>
          Qual Projeto você que realizar?
        </label>
        <div className="content-button">
          <button
            className={project === "Aplicativo" && "active-button"}
            onClick={() => setProject("Aplicativo")}
          >
            Aplicativo
          </button>
          <button
            className={project === "Site" && "active-button"}
            onClick={() => setProject("Site")}
          >
            Site
          </button>
          <button
            className={project === "Plataforma Web" && "active-button"}
            onClick={() => setProject("Plataforma Web")}
          >
            Plataforma Web
          </button>
          <button
            className={project === "Outro" && "active-button"}
            onClick={() => setProject("Outro")}
          >
            Outro
          </button>
        </div>
        <label className={buttonError && project === "" && "error-label"}>
          Quanto você pretende investir no seu projeto?
        </label>
        <div className="content-button">
          <button
            className={price === "Até 5 mil" && "active-button"}
            onClick={() => setPrice("Até 5 mil")}
          >
            Até 5 mil
          </button>
          <button
            className={price === "5 há 10 mil" && "active-button"}
            onClick={() => setPrice("5 há 10 mil")}
          >
            5 há 10 mil
          </button>
          <button
            className={price === "10 há 20 mil" && "active-button"}
            onClick={() => setPrice("10 há 20 mil")}
          >
            10 há 20 mil
          </button>
          <button
            className={price === "+ 20 mil" && "active-button"}
            onClick={() => setPrice("+ 20 mil")}
          >
            + 20 mil
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Nome"
            name="name"
            className={errors.name && "error"}
            ref={register({ required: true })}
          />

          <div className="content-input">
            <input
              placeholder="E-mail Comercial"
              name="email"
              type="tel"
              className={errors.email && "error"}
              ref={register({ required: true })}
            />

            <input
              placeholder="Telefone"
              name="tel"
              className={errors.tel && "error"}
              ref={register({ required: true })}
            />
          </div>
          <input
            placeholder="Nome da Empresa"
            name="company"
            className={errors.company && "error"}
            ref={register({ required: true })}
          />

          <label>Nos conta um pouco mais sobre seu projeto</label>
          <textarea
            placeholder="Detalhes do projeto"
            name="detail"
            className={errors.detail && "error"}
            ref={register({ required: true })}
          />

          <div className="content-input group-send">
            <span>Quanto mais detalhes melhor!</span>
            <button type="submit">Enviar e-mail</button>
          </div>
        </form>
      </div>
    </Container>
  );
}

// Form.propTypes = {
//   background: PropTypes.string.isRequired,
//   bgHover: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
//   childrenColor: PropTypes.string,
//   bgColor: PropTypes.string,
//   shadow: PropTypes.bool,
// };
