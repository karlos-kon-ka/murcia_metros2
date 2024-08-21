const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // o cualquier servicio de correo
  auth: {
    user: 'carlos99.cp88secundaria@gmail.com',
    pass: 'Elreymenda',
  },
});

app.post('/send', (req, res) => {
  const { nombre, telefono, mensaje } = req.body;

  const mailOptions = {
    from: 'carlos99.cp88secundaria@gmail.com',
    to: 'carlos99.cp88secundaria@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo.');
    } else {
      res.status(200).send('Correo enviado.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
