import React from "react";
import AppBar from "@mui/material/AppBar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { styled } from "@mui/material/styles";
import { Button, Container, Grid, Typography } from "@mui/material";

const SigInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#2C6C73"),
  backgroundColor: "#2C6C73",
  "&:hover": {
    backgroundColor: "#052326",
  },
}));

export const Footer = () => {
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#011526" }}
      >
        <Container
          fixed
          sx={{ height: "80px", alignItems: "center", display: "flex" }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Typography component="div" sx={{ marginRight: 2, fontSize: 18 }}>
                Subtotal
              </Typography>
              {/* Subtotal */}
              <Typography
                component="div"
                sx={{ fontSize: 18, fontWeight: "bold" }}
              >
                $0,00
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <SigInButton
                variant="contained"
                endIcon={<LocalGroceryStoreIcon />}
                sx={{ backgroundColor: "#2C6C73", textTransform: "none" }}
              >
                Ir al resumen
              </SigInButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};
