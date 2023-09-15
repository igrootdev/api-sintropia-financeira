require('dotenv').config();
const nodemailer = require("nodemailer");

const sendEmailWelcome = (req, res) => {

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,

  auth: {    
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

async function main() {

  const info = await transporter.sendMail({
    from: '"Sintropia Financeira" <ander.silva2710@gmail.com>', // sender address
    to: "ander.silva27@hotmail.com", // list of receivers
    subject: "Bem vindo(a) à Sintropia Financeira", // Subject line
    text: "Hello world?", // plain text body
   // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);

}

module.exports = {
  sendEmailWelcome 
}