import PropTypes from "prop-types";
import axios from "axios";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Form(props) {
  const { onChange } = props;
  const { register, handleSubmit, watch, errors } = useForm();
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [buttonError, setButtonError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const onSubmit = (data) => {
    if (project === "" || price === "") {
      setButtonError(true);
    } else {
      sendEmail(data);
    }
  };

  async function sendEmail({ detail, company, name, email, tel }) {
    const send = {
      text: `Projeto: ${project} - Investimento: ${price} \nDescrição:${detail}\n
      Empresa:${company}\n
      lead:${name}\n
      email:${email}\n
      telefone:${tel}\n`,
      view: `gmail`,
      html: `<h2>Projeto: ${project} - Investimento: ${price}</h2><br/>
         <p><b>Descrição:</b>${detail}</p><br/>
         <label><b>Empresa:</b>${company}</label><br/>
         <label><b>lead:</b>${name}</label><br/>
         <label><b>email:</b>${email}</label><br/>
         <label><b>telefone:</b>${tel}</label> <br/>`,
      subject: `lead: ${name} - Empresa: ${company}`,
    };

    try {
      await axios.post("https://api.spacerocket.com.br/email", send);

      setSendSuccess(true);
    } catch (error) {
      toast.warn(
        "Erro inesperado! entre em contato conosco pelo nosso email: oi@spacerocket.com.br ",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setApiError(true);
      console.error(error);
    }
  }

  return (
    <Container>
      <div className="opacity" onClick={() => onChange(false)}></div>
      <div className="content">
        <div className="header">
          {!sendSuccess && (
            <>
              <h4>Quer criar um projeto com a Space?</h4>
              <span>
                A equipe está aberta para suas idéias,
                <br /> perguntas e necessidades.
              </span>
            </>
          )}
          <div className="esc" onClick={() => onChange(false)}>
            <img src="assets/esc_form.svg" alt="esc form" />
          </div>
        </div>
        {sendSuccess ? (
          <div className="content-sucess">
            <div>
              <img src="assets/send_success.svg" />
            </div>

            <label>
              {apiError ? "Erro inesperado!" : "Orçamento enviado!"}
            </label>
            <span>
              {" "}
              {apiError
                ? "entre em contato conosco pelo nosso email: oi@spacerocket.com.br"
                : "Te retornamos em até 72 horas."}
            </span>
          </div>
        ) : (
          <>
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
                  type="email"
                  className={errors.email && "error"}
                  ref={register({
                    required: true,
                  })}
                />

                <input
                  placeholder="Telefone"
                  name="tel"
                  type="tel"
                  className={errors.tel && "error"}
                  ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
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
          </>
        )}
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
