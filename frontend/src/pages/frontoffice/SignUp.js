import { react, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Button,
  Grid,
  TextField,
  styled,
  useTheme,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function SignUp() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/sign-up-confirm");
  };

  console.log(isValid);

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
            display={{ xs: "none", sm: "block" }}
          >
            Crear cuenta
          </Typography>
          <Grid container pb={2} display={{ xs: "flex", sm: "none" }}>
            <Grid item xs={3}>
              <IconButton size="small" onClick={() => navigate("/sign-in")}>
                <KeyboardArrowLeft />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                alignSelf: "center",
                displey: "flex",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center ",
                  fontWeight: "bold",
                }}
              >
                Crear cuenta
              </Typography>
            </Grid>
          </Grid>
          {/* <Box sx={{ border: "1px solid black", p: 2, borderRadius: 5 }}> */}
          <Box pt={5}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ width: "100%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Tu nombre"
                    autoFocus
                    {...register("name", {
                      required: true,
                      maxLength: 80,
                      pattern: /[A-Za-z]{1,32}/i,
                    })}
                  />
                  {errors.name?.type === "required" && "Tu nombre es requerido"}
                  {errors.name?.type === "pattern" &&
                    "Tu nombre solo puede contener letras"}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Tu apellido"
                    name="lastName"
                    autoComplete="family-name"
                    {...register("lastName", {
                      required: true,
                      maxLength: 80,
                      pattern: /[A-Za-z]{1,32}/i,
                    })}
                  />
                  {errors.lastName?.type === "required"
                    ? "Tu apellido es requerido"
                    : null}
                  {errors.lastName?.type === "pattern" &&
                    "Tu apellido solo puede contener letras"}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Tu Email"
                    name="email"
                    autoComplete="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === "required" && "Tu email es requerido"}

                  {errors.email?.type === "pattern" && "Tu email no es valido"}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="dni"
                    label="Nº de DNI (sin guiones ni espacios)"
                    name="dni"
                    {...register("dni", {
                      required: true,
                      minLength: 8,
                      maxLength: 8,
                    })}
                  />
                  {errors.dni?.type === "minLength" && "revisa tu DNI"}
                  {errors.dni?.type === "maxLength" && "revisa tu DNI"}
                  {errors.dni?.type === "required" && "Tu DNI es requerido"}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                  {errors.password?.type === "required" &&
                    "Tu contraseña es requerido"}
                  {errors.password?.type === "minLength" &&
                    "Tu contraseña tiene que tener más de 6 caracteres"}
                </Grid>
                <Grid item xs={12}>
                  <SigInButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: { sm: 3, xs: 20 },
                      mb: 2,
                      backgroundColor: "#2C6C73",
                    }}
                  >
                    Confirmar
                  </SigInButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
