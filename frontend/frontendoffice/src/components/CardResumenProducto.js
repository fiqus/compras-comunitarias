import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

export const CardResumenProducto = () => {
  return (
    <>
      {/* Resumen de compra */}
      <Paper elevation={3} sx={{ backgroundColor: "gray" }}>
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
          <Grid
            container
            sx={{ flexDirection: "row-reverse", display: "flex" }}
          >
            <Grid
              container
              wrap="nowrap"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {/* Cantidades del producto */}
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", paddingLeft: 2 }}
              >
                x2
              </Typography>
              {/* Descripcion del producto */}
              <Typography noWrap sx={{ fontSize: "14px", paddingLeft: 2 }}>
                Descripción del producto y sus caracteristicas
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
                    fontSize: "18px",
                    paddingRight: 2,
                  }}
                >
                  $250
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
