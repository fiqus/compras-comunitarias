import React from "react";
import NavBar from "../../components/frontoffice/NavBar";
import { Footer } from "../../components/frontoffice/Footer";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { CardProducto } from "../../components/frontoffice/CardProducto";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const productsList = [
  {
    listing: 3,
    product: "sssssssssssss",
    price: "1.00",
    presentation: "1",
    cost: "1.00",
    product_id: 3,
    image: "product_images/Screenshot_from_2021-11-25_12-10-01.png",
    description: "sdsdsdsds",
  },
  {
    listing: 3,
    product: "sssssssssssss",
    price: "2.00",
    presentation: "2",
    cost: "2.00",
    product_id: 3,
    image: "product_images/Screenshot_from_2021-11-25_12-10-01.png",
    description: "sdsdsdsds",
  },
  {
    listing: 3,
    product: "Aloja",
    price: "10000.00",
    presentation: "4",
    cost: "51.00",
    product_id: 4,
    image: "product_images/Screenshot_from_2021-11-16_18-12-46.png",
    description: "adsfasd",
  },
];

export const ListaProductos = () => {
  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <NavBar />
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}>
        <AppBar position="static" sx={{ backgroundColor: "#2C6C73" }}>
          <Toolbar
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </Button>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontStyle: "italic",
                display: { xs: "flex", md: "none" },
              }}
            ></Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "row-reverse" },
                alignItems: "center",
              }}
            >
              <Avatar
                component="div"
                alt="Remy Sharp"
                sx={{ marginRight: 2 }}
              />
              {/* Nombre de usuario */}
              <Typography component="div" sx={{ mr: 2 }}>
                Mariano Lopez
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

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
        {productsList.map((productsList) => (
          <CardProducto
            product={productsList.product}
            description={productsList.description}
            cost={productsList.cost}
            presentation={productsList.presentation}
            img={productsList.image}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};
