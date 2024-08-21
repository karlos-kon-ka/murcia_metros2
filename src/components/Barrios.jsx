import { Card, CardContent, Typography, Grid } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Data from '../../Barrios.json';  

function Barrios() {
  return (
    <div>
      <Grid container spacing={3}>
        {Data.map((barrio) => (
          <Grid item xs={12} sm={6} md={4} key={barrio.id}>
            <Card className='barrio_container'>
              <LazyLoadImage 
                src={barrio.img}
                alt={barrio.barrio}
                effect="blur"
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover' 
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {barrio.barrio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio por m²: {barrio.precio_m2}€
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Calificación: {barrio.calificacion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Barrios;
