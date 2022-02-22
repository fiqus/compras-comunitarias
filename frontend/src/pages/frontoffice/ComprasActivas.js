import * as React from 'react';
import NavBar from "../../components/frontoffice/NavBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import CardComprasActivas from "../../components/frontoffice/CardComprasActivas";
import CardProximasCompras from "../../components/frontoffice/CardProximasCompras";

export default function ComprasActivas() {
  return (
    <>
      <NavBar />

      <Container fixed sx={{ marginTop: 2 }}>
        {/* Compras activas */}
        <Grid
          container
          sx={{ displey: "flex", justifyContent: { xs: "center", md: "left" } }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Compras activas
          </Typography>
        </Grid>
        <Divider component="div" />

        {/* Tarjeta de compras */}
        <CardComprasActivas />
        <CardComprasActivas />

        {/* Próximas Compras */}
        <Grid
          container
          sx={{
            displey: "flex",
            marginTop: 2,
            justifyContent: { xs: "center", md: "left" },
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Próximas compras
          </Typography>
        </Grid>
        <Divider component="div" />

        {/* Tarjeta proxima compras */}
        <CardProximasCompras />
      </Container>
    </>
  );
};