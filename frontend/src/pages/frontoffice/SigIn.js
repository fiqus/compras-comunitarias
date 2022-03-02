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
import {useRecoilState} from "recoil";
import {passwordState, usernameState, userTokensState} from "../../state";
import {httpPost} from "../../apiClient";
import {Navigate} from "react-router-dom";


const theme = createTheme();

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function SignIn() {

    const [username, setUsername] = useRecoilState(usernameState)
    const [password, setPassword] = useRecoilState(passwordState)
    const [_userToken, setUserToken] = useRecoilState(userTokensState)

    const handleSubmit = async() => {
        const res = await httpPost(
            "/user/login",
            {"username": username, "password": password},
        );

        if (res.status === 200) {
            //TODO: MOSTRAR MENSAJE DE LOGIN EXITOSO
            setUserToken(res.data.token);
        } else {
            //TODO: MOSTRAR UN MENSAJE MENSAJE DE ERROR CON DESCRIPCION
        }
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
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresa usuario"
              name="email"
              autoComplete="usuario"
              autoFocus
              onChange={(event) => setUsername(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <SigInButton
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#2C6C73" }}
              onClick={handleSubmit}
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
