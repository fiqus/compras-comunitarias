import { Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { CardResumenProducto } from "../components/CardResumenProducto";
import { ResumenList } from "../components/ResumeList";
import RoomIcon from "@mui/icons-material/Room";
import TodayIcon from "@mui/icons-material/Today";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const ConfirmBuyButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  borderRadius: "5px",
  width: "327px",
  height: "40px",
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export const CardConfirmarCompra = () => {
  return (
    <>
      {/* Tarjeta de recordatorio de retiro */}
      <Grid container mt={5}>
        <Grid
          container
          spacing={0.5}
          xs={13}
          md={5}
          sx={{
            border: "1px solid",
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            padding: 1.5,
          }}
        >
          <Grid item>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              La compra se retira:
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RoomIcon />
            <Typography sx={{ fontSize: "12px", paddingLeft: 1 }}>
              Escuela Jaime de Nevarez
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TodayIcon />
            <Typography sx={{ fontSize: "12px", paddingLeft: 1 }}>
              Sábado 07 de Octubre
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <QueryBuilderIcon />
            <Typography sx={{ fontSize: "12px", paddingLeft: 1 }}>
              De 10hs a 13hs
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
              Recordá que una vez que confirmes tu compra vamos a asiganarte un
              rango horario específico.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignContent: { md: "flex-end", sm: "center" },
          }}
        >
          <Grid pt={{ xs: 5 }}>
            <ConfirmBuyButton
              sx={{
                backgroundColor: "#2C6C73",
                textTransform: "none",
                fontSize: "18px",
              }}
            >
              Confirmar compra
            </ConfirmBuyButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
