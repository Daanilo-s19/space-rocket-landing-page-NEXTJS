const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const send = ({ project, price, name, email, tel, company, detail }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "contato@spacerocket.com.br",
    subject: `lead: ${name} - Empresa: ${company}`,
    text: `Projeto: ${project} - Investimento: ${price}\n\n
   ${detail}\n
   Empresa: ${company}
   lead: ${name}
   email: ${email}
   telefone: ${tel}
    `,
    replyTo: from,
    html: `
    <h2>Projeto: ${project} - Investimento: ${price}</h2><br/>
    <p><b>Descrição:</b>${detail}</p><br/>
    <label><b>Empresa:</b>${company}</label><br/>
    <label><b>lead:</b>${name}</label><br/>
    <label><b>email:</b>${email}</label><br/>
    <label><b>telefone:</b>${tel}</label> <br/>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
