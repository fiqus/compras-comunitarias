import * as React from 'react';
import NavBar from '../components/NavBar';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Container, Divider, TextField } from '@mui/material';

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
      <Grid container  wrap="nowrap" spacing={0} sx={{marginTop: 2, border: "1px solid black", marginLeft: 0, marginRight: 0,}}>
        <Grid>
          <Grid sx={{ width: 163, height: 108}}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{m: 0 }}/>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs={12} sm container component="div" sx={{displey: "flex", alignContent: "center"}}>
            <Grid item xs >
              <Typography gutterBottom variant="subtitle1" component="div" >
              15va Compra Comunitaria
              </Typography>
              <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SigInButton fullWidth variant="contained" sx={{marginTop: 1}}>Comprar</SigInButton>
      <Grid container  wrap="nowrap" spacing={0} sx={{marginTop: 2, border: "1px solid black", marginLeft: 0, marginRight: 0,}}>
        <Grid>
          <Grid sx={{ width: 163, height: 108}}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{m: 0 }}/>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs={12} sm container component="div" sx={{displey: "flex", alignContent: "center"}}>
            <Grid item xs >
              <Typography gutterBottom variant="subtitle1" component="div" >
              15va Compra Comunitaria
              </Typography>
              <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SigInButton fullWidth variant="contained" sx={{marginTop: 1}}>Comprar</SigInButton>
    
    {/* Tarjeta proxima compras */}
    <Grid container sx={{displey: "flex", justifyContent: {xs: "center", md: 'left'}}}>
      <Typography sx={{fontSize: 20, fontWeight: "bold", marginTop: 3}}>Próximas compras</Typography>
      </Grid>
      <Divider component="div" />
      <Grid container wrap="nowrap" spacing={0} sx={{marginTop: 2, border: "1px solid black", marginLeft: 0, marginRight: 0,}}>
        <Grid>
          <Grid sx={{ width: 163, height: 108}}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{m: 0 }}/>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container component="div" sx={{displey: "flex", alignContent: "center"}}>
          <Grid item wrap="nowrap" spacing={2}>
            <Grid item xs >
              <Typography gutterBottom variant="subtitle1" component="div" >
              15va Compra Comunitaria
              </Typography>
              <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{paddingTop: 2, paddingRight: 2,}}>
            <Typography variant="subtitle1" component="div" sx={{textAlign: "end", display: {xs: "none", md: 'flex'}}} >
            Comienza el 24/09/2021
            </Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" component="div" sx={{textAlign: "end", display: {xs: 'block', sm: 'block', md: 'none'}}} >
            Comienza el 24/09/2021
      </Typography>
      
    
    
    </Container>
  </>
  );
};