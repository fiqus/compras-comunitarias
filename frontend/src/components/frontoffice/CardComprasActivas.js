import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { listingsState } from "../../state";


const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export default function CardComprasActivas({id, name, description}) {


  return (
    <>
      {/* Tarjeta de compras */}
      <Grid
        container
        wrap="nowrap"
        sx={{
          marginTop: 2,

          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Grid>
          <Grid sx={{ width: 163, height: 108 }}>
            <Img alt="complex" src="/src/img/compras.jpeg" sx={{ m: 0 }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid
            item
            xs={12}
            sm
            container
            component="div"
            sx={{ displey: "flex", alignContent: "center" }}
          >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
               {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SigInButton
        fullWidth
        variant="contained"
        sx={{ marginTop: 1 }}
        href="/lista-productos"
      >
        Comprar
      </SigInButton>
    </>
  );
}
