import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


const theme = createTheme();

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 86, height: 86, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon style={{fontSize: 86}}/> */}
            </Avatar>
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontStyle: "italic" }}
            >
              Mutual "La Correntoza"
            </Typography>
            <Typography component="h2" variant="subtitle2">
              Te da la bienvenida a
            </Typography>
          </Box>
          <Typography
            component="div"
            variant="h4"
            sx={{
              textAlign: "center",
              marginTop: 4,
              marginBottom: 4,
              fontWeight: "bold",
              fontSize: 28,
            }}
          >
            Compras Comunitarias
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <SigInButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#2C6C73" }}
              href="/compras-activas"
            >
              Ingresar
            </SigInButton>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" gutterBottom component="div">
                ¿Todavía no sos parte?
              </Typography>
              <Link href="#" variant="body2">
                {"Registrate acá"}
              </Link>
            </Grid>
            {/* </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}