import {
  Avatar,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import NavBar from "../components/NavBar";

const SigInButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  borderRadius: "5px",
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

export const CompraExitosa = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <NavBar />
      </Box>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "212px",
              height: "201px",
            }}
          >
            <Img src="src/img/carritoCompras.png" />
          </Box>
          <Typography
            component="div"
            variant="h4"
            sx={{
              textAlign: "center",
              marginTop: 3,
              marginBottom: 1,
              fontWeight: "bold",
              fontSize: "36px",
            }}
          >
            ¡Tu pedido fue registrado con éxito!
          </Typography>
          {/* Informacion de retiro, hora y lugar */}
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              marginTop: 1,
              marginBottom: 1,
              fontSize: "18px",
            }}
          >
            Se retira el Sábado 07 de Octubre en la Escuela Jaime de Nevarez de
            10hs a 13hs
          </Typography>
          <Box
            mt={2}
            p={1}
            sx={{ border: "2px solid #2C6C73", borderRadius: "5px" }}
          >
            <Typography sx={{ textAlign: "center" }}>
              Podés ver el resumen de tu compra desde la pantalla de inicio
            </Typography>
          </Box>
          <Box component="div" pt={2}>
            <SigInButton fullWidth variant="contained">
              <Typography noWrap component="div">
                Volver al inicio
              </Typography>
            </SigInButton>
          </Box>
        </Box>
      </Container>
    </>
  );
};
