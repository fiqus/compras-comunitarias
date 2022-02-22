import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

const Img = styled('img')({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CardProximasCompras() {
  return (
    <>
      <Grid
        container
        wrap="nowrap"
        spacing={0}
        sx={{ marginTop: 2, marginLeft: 0, marginRight: 0 }}
      >
        <Grid>
          <Grid sx={{ width: 163, height: 108 }}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{ m: 0 }} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          component="div"
          sx={{ displey: "flex", alignContent: "center" }}
        >
          <Grid container wrap="nowrap" spacing={2}>
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
        <Grid item sx={{ paddingTop: 2, paddingRight: 2 }}>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: "end", display: { xs: "none", md: "flex" } }}
          >
            Comienza el 24/09/2021
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle1"
        component="div"
        pt={2}
        sx={{
          textAlign: "end",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        Comienza el 24/09/2021
      </Typography>
    </>
  );
};