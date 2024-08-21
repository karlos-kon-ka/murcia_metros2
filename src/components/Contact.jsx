import  { useState } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';
import axios from 'axios';

function Contact() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send', {
        nombre,
        telefono,
        mensaje,
      });
      console.log(response.data);
      alert('Mensaje enviado con éxito.');
    } catch (error) {
      console.error('Hubo un problema al enviar el mensaje:', error);
      alert('Hubo un problema al enviar el mensaje.');
    }

    // Clear the form fields
    setNombre('');
    setTelefono('');
    setMensaje('');
  };

  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              required
              value={nombre}
              onChange={handleNombreChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Teléfono"
              variant="outlined"
              required
              value={telefono}
              onChange={handleTelefonoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mensaje"
              variant="outlined"
              required
              multiline
              rows={4}
              value={mensaje}
              onChange={handleMensajeChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Contact;
