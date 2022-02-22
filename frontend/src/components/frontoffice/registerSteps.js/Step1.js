import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const theme = createTheme();

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function Step1() {
  return (
    <>
      <Box
        component="form"
        sx={{ mt: 1 }}
        border="1px solid"
        borderRadius={3}
        p={2}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container pb={3}>
          <Grid item xs={1}>
            <Button href="/">
              <ArrowBackIosIcon />
            </Button>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              alignSelf: "center",
            }}
          >
            {/* Paginacion del SignUp */}
            <Typography
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center ",
              }}
            >
              Paso 1 de 2
            </Typography>
          </Grid>
        </Grid>
        {/* Paso 1 del registro */}
        <Box display="block">
          <Typography sx={{ textAlign: "center" }}>
            Primero te vamos a pedir que ingreses un email y crees contraseña
            para tu cuenta.
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Ingresa mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Ingresa contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Confirmar contraseña"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
          />

          <SigInButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#2C6C73" }}
            disabled={true}
          >
            Siguiente
          </SigInButton>
        </Box>
      </Box>
    </>
  );
}
