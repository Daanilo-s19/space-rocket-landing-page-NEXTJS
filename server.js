const express = require("express");
const next = require("next");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const mailer = require("./src/services/mailer");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(bodyParser.json());

  server.post("/contact", (req, res) => {
    const { project, price, name, email, tel, company, detail } = req.body;

    if (project && price && name && email && tel && company && detail) {
      mailer({ project, price, name, email, tel, company, detail })
        .then(() => {
          console.log("success");
          res.send("Email enviado!").status(204);
        })
        .catch((error) => {
          console.log("failed", error);
          res.status(500).send("Erro ao enviar o email");
        });
    } else {
      res.status(400).send("Bad request");
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3333, (err) => {
    if (err) throw err;
    console.log("> Read on http://localhost:3333");
  });
});
