import React from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Container, Typography } from "@mui/material";
import { CardProducto } from "../components/CardProducto";

export const ListaProductos = () => {
  return (
    <>
      <NavBar />
      <Container fixed sx={{ marginBottom: 20 }}>
        <Typography
          sx={{
            fontSize: { md: 36, xs: 20 },
            fontWeight: "bold",
            paddingTop: 2,
          }}
        >
          15va Compra comunitaria
        </Typography>
        {/* Ver si vamos a hacer por seccion o no */}
        <Typography sx={{ fontSize: { md: 24, xs: 16 } }}>
          Sección 1/6 Almacén
        </Typography>

        {/* Carta de producto */}
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
      </Container>
      <Footer />
    </>
  );
};
