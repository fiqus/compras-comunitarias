import * as React from 'react';
import NavBar from '../components/NavBar';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Container, Divider, TextField } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComprasActivas() {
  return (
  <>
  <NavBar />
  <Container fixed sx={{marginTop: 10}}>
  <Typography sx={{fontSize: 20, fontWeight: "bold"}}>Compras activas</Typography>
  <Divider component="div" />
  {/* Carta de compras anteriores */}
  <Paper
      elevation={4}
      sx={{
        flexGrow: 1,
        backgroundColor: "#AEB7BF",
        marginTop: 5,
      }}
    >
      <Grid container spacing={2} sx={{padding: 0,}}>
        <Grid item sx={{padding: 0,}} >
          <Grid sx={{ width: 163, height: 108, p: 0}}>
            <Img alt="complex" src="/src/img/compras.jpeg"/>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              15va Compra Comunitaria
              </Typography>
              <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Container>
  </>
  );
};