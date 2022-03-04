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
import { useRecoilState } from "recoil";
import {
  listingsProductState,
  userTokensState,
  listingIdState,
  listingTitleState,
} from "../../state";
import { httpGet } from "../../apiClient";
import { useEffect } from "react";

export const ListaProductos = () => {
  const [userTokens, _] = useRecoilState(userTokensState);
  const [listingId, setListingId] = useRecoilState(listingIdState);
  const [listingTitle, setListingTitle] = useRecoilState(listingTitleState);
  const [listingsProduct, setListingsProduct] =
    useRecoilState(listingsProductState);

  const getListingsProduct = async () => {
    const res = await httpGet(
      `/listing_products/${listingId}`,
      {},
      { token: userTokens }
    );
    setListingsProduct(res.data);
  };

  useEffect(() => {
    getListingsProduct();
    console.log("LISTINGSPRODUCTS", listingsProduct);
  }, [userTokens]);

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
          {listingTitle}
        </Typography>
        {/* Ver si vamos a hacer por seccion o no */}
        {/* <Typography sx={{ fontSize: { md: 24, xs: 16 } }}>
          Sección 1/6 Almacén
        </Typography> */}

        {/* Carta de producto */}
        {listingsProduct.map((listingsProduct) => (
          <CardProducto
            product={listingsProduct.product}
            description={listingsProduct.description}
            cost={listingsProduct.cost}
            presentation={listingsProduct.presentation}
            img={listingsProduct.image}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};
