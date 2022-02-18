import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { StateMachineProvider, createStore } from "little-state-machine";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step1 from "../components/registerSteps.js/Step1";
import Step2 from "../components/registerSteps.js/Step2";

const theme = createTheme();

createStore({
  SignUpDetails: {
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    dni: "",
  },
});

export default function SignUp() {
  return (
    <ThemeProvider theme={theme}>
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
          <Typography
            component="div"
            variant="h4"
            sx={{
              textAlign: "center",
              marginTop: 4,
              marginBottom: 4,
              fontWeight: "bold",
              fontSize: "36px",
            }}
          >
            Crear cuenta
          </Typography>
          {/* <Step1 /> */}
          <Step2 />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
