import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export const CardProducto = () => {
  const [producto, setProducto] = useState(0);
  const [CounterButtom, setCounterButtom] = useState("none");
  const [ButtomAgregar, setButtomAgregar] = useState("flex");

  const addButtomCounter = () => {
    setButtomAgregar("none");
    setCounterButtom("flex");
    setProducto(producto + 1);
  };
  const addProducto = () => {
    setProducto(producto + 1);
  };
  const deletProducto = () => {
    setProducto(producto - 1);
    if (producto < 2) {
      setButtomAgregar("flex");
      setCounterButtom("none");
    }
  };

  return (
    <>
      {/* Carta de producto */}
      <Grid
        container
        wrap="nowrap"
        sx={{ marginTop: 2, marginLeft: 0, marginRight: 0 }}
      >
        <Grid item>
          <Grid sx={{ width: 163, height: 108 }}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{ m: 0 }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid
            item
            xs={12}
            sm
            container
            component="div"
            sx={{ displey: "flex", alignContent: "center" }}
          >
            <Grid item xs>
              {/* Nombre de producto */}
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "bold", fontSize: { xs: 12, md: 16 } }}
              >
                Harina de Garbanzo x1kg
              </Typography>
              {/* Descripcion */}
              <Typography
                variant="body2"
                gutterBottom
                component="div"
                sx={{
                  marginRight: { md: 15, xs: 0 },
                  fontSize: { xs: 12, md: 16 },
                }}
              >
                Harina de Garbanzo de Granja las praderas, sin conservantes, en
                envase de 1kg
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ paddingTop: 2, paddingRight: 2 }}>
          {/* Valor del producto */}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              textAlign: "end",
              flexDirection: "row-reverse",
              fontSize: 24,
              fontWeight: "bold",
              display: { xs: "none", sm: "flex" },
            }}
          >
            $ 400
          </Typography>

          {/* Boton agregar al carrito */}
          <Box></Box>
          <SigInButton
            onClick={addButtomCounter}
            variant="contained"
            sx={{
              textTransform: "none",
              flexDirection: "row-reverse",
              display: {
                sm: `${ButtomAgregar}`,
                md: `${ButtomAgregar}`,
                xs: "none",
              },
            }}
          >
            <Typography wrap="nowrap" sx={{ marginInline: 1.3 }}>
              Agregar al carrito
            </Typography>
          </SigInButton>
          {/* Boton contador */}
          <ButtonGroup
            variant="div"
            wrap="nowrap"
            sx={{
              display: {
                sm: `${CounterButtom}`,
                md: `${CounterButtom}`,
                xs: "none",
              },
            }}
          >
            <SigInButton onClick={deletProducto}>-</SigInButton>
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              {producto} en carrito
            </Typography>
            <SigInButton onClick={addProducto}>+</SigInButton>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid
        container
        wrap="nowrap"
        sx={{
          marginTop: 2,
          marginLeft: 0,
          marginRight: 0,
          display: { md: "none", sm: "none" },
        }}
        spacing={{ xs: 2 }}
      >
        <Grid item xs={9}>
          <Box>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
            >
              $400
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid
            item
            xs={12}
            sm
            container
            component="div"
            sx={{ displey: "flex", alignContent: "center" }}
          >
            <Box>
              <Grid item xs>
                {/* Boton agregar al carrito */}
                <SigInButton
                  onClick={addButtomCounter}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    flexDirection: "row-reverse",
                    display: { xs: `${ButtomAgregar}` },
                  }}
                >
                  <Typography wrap="nowrap" sx={{ marginInline: 1.3 }}>
                    Agregar al carrito
                  </Typography>
                </SigInButton>

                {/* Boton contador */}
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  sx={{ display: { xs: `${CounterButtom}` } }}
                >
                  <SigInButton onClick={deletProducto}>-</SigInButton>
                  <Typography
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 1,
                      paddingRight: 1,
                    }}
                  >
                    {producto} en carrito
                  </Typography>
                  <SigInButton onClick={addProducto}>+</SigInButton>
                </ButtonGroup>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ paddingTop: 2 }} component="div" />
    </>
  );
};
