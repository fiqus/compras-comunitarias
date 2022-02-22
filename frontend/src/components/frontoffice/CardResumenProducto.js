import { Divider, Grid, Paper, Typography } from "@mui/material";
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
            height: { md: "66px", xs: "33px" },
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
              <Grid item>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "18px", paddingLeft: 2 }}
                >
                  x2
                </Typography>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{
                  border: "1px solid",
                  marginLeft: 2,
                  display: { md: "none", xs: "block" },
                }}
              />
              {/* Descripcion del producto */}
              <Grid item xs zeroMinWidth>
                <Typography
                  noWrap
                  sx={{
                    fontSize: "14px",
                    paddingLeft: 2,
                    width: { xs: "200px", md: "block" },
                  }}
                >
                  Descripción del producto y sus caracteristicas
                </Typography>
              </Grid>
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
