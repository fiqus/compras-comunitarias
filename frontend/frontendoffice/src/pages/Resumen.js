import { Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { CardResumenProducto } from "../components/CardResumenProducto";
import { ResumenList } from "../components/ResumeList";

const SigInButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  borderRadius: "10px",
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export const Resumen = () => {
  return (
    <>
      <NavBar />
      <Container fixed sx={{ marginBottom: 20 }}>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "bold",
            paddingTop: 2,
          }}
        >
          Resumen de compra
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SigInButton aria-label="delete">
            <ArrowBackIosNewIcon fontSize="small" />
          </SigInButton>
          <Typography sx={{ fontSize: "14px", paddingLeft: 2 }}>
            Seguir comprando
          </Typography>
        </Box>

        {/* Resumen de compra */}
        <ResumenList />
      </Container>
    </>
  );
};
