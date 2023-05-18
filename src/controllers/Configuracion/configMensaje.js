const nodemailer = require("nodemailer");
const tokenGMAIL = "qzovpupmoqgokxnc";

module.exports = (correo, asunto, mensaje) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testcapstone2023@gmail.com",
      pass: "qzovpupmoqgokxnc",
    },
  });
  const mailOptions = {
    from: "testcapstone2023@gmail.com",
    to: correo,
    subject: asunto,
    html: `
 <p>${mensaje}</p>
 `,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
  });
};
