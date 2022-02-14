import * as React from 'react';
import NavBar from '../components/NavBar';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Container, Divider, TextField } from '@mui/material';
import CardComprasActivas from '../components/CardComprasActivas';
import CardProximasCompras from '../components/CardProximasCompras';

const Img = styled('img')({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#2C6C73'),
  backgroundColor: '#2C6C73',
  '&:hover': {
    backgroundColor: '#052326',
  },
}));


export default function ComprasActivas() {
  return (
  <>
  <NavBar />
  <Container fixed sx={{marginTop: 2}}>
{/* Compras activas */}
  <Grid container sx={{displey: "flex", justifyContent: {xs: "center", md: 'left'}}}>
  <Typography sx={{fontSize: 20, fontWeight: "bold"}}>Compras activas</Typography>
  </Grid>
  <Divider component="div" />

  {/* Tarjeta de compras */}
  <CardComprasActivas />
  <CardComprasActivas />

{/* Próximas Compras */}
<Grid container sx={{displey: "flex", marginTop: 2, justifyContent: {xs: "center", md: 'left'}}}>
  <Typography sx={{fontSize: 20, fontWeight: "bold"}}>Próximas compras</Typography>
  </Grid>
<Divider component="div" />

  {/* Tarjeta proxima compras */}
  <CardProximasCompras/>
  
    </Container>
  </>
  );
};