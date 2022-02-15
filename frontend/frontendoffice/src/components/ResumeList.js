import { Grid, Typography } from "@mui/material";
import React from "react";

import { CardResumenProducto } from "../components/CardResumenProducto";

export const ResumenList = () => {
  return (
    <>
      {/* Resumen de compra */}
      <CardResumenProducto />
      <CardResumenProducto />
      <CardResumenProducto />
      <CardResumenProducto />

      <Grid
        container
        wrap="nowrap"
        sx={{
          height: "66px",
          marginTop: 2,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Grid container sx={{ flexDirection: "row-reverse", display: "flex" }}>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            {/* Cantidades del producto */}
            <Typography
              sx={{ fontWeight: "bold", fontSize: "24px", paddingLeft: 2 }}
            >
              Total
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            flexDirection: "row-reverse",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid>
            <Grid item xs>
              {/* Valor del producto acumulado */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  paddingRight: 2,
                }}
              >
                $250
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
