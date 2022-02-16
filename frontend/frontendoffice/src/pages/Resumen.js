import {
  AppBar,
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
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
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { CardConfirmarCompra } from "../components/CardConfirmarCompra";

const SigInButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  borderRadius: "5px",
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

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

export const Resumen = () => {
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
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <LocalGroceryStoreIcon fontSize="small" />
              <Typography
                ml={2}
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: "16px",
                  marginTop: "2px",
                }}
              >
                Tu compra
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container fixed sx={{ marginBottom: 20 }}>
        <Typography
          sx={{
            fontSize: { md: "36px", xs: "14px" },
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
            display: { xs: "none" },
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

        {/* Tarjeta de recordatorio de retiro */}
        <CardConfirmarCompra />
      </Container>
    </>
  );
};
