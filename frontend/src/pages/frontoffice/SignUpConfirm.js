import { React, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function SignUpConfirm() {
  const confirmIcon = useRef(null);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            ref={confirmIcon}
            sx={{ width: 86, height: 86, bgcolor: "#2C6C73" }}
          >
            <CheckIcon fontSize="large" />
          </Avatar>

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
            ¡Listo!
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            sx={{ textAlign: "center", fontSize: "18px" }}
          >
            Te enviamos un mail de confirmación a tu casilla de correo:
          </Typography>
          {/* Mail de registro */}
          <Typography
            component="h1"
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "18px" }}
          >
            martin.thiessen@gmail.com
          </Typography>
          <Grid
            pt={5}
            pb={5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" gutterBottom component="div">
              ¿No te llegó el mail?
            </Typography>
            {/* Reenviar mail de confirmacion de registro */}
            <Link href="#" variant="body2" sx={{ fontSize: "16px" }}>
              {"Reenviar email"}
            </Link>
          </Grid>
          {/* Volver al SigIn */}
          <SigInButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#2C6C73" }}
            onClick={() => navigate("/sign-in")}
          >
            Volver al login
          </SigInButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
