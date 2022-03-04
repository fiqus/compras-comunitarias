import * as React from 'react';
import NavBar from "../../components/frontoffice/NavBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import CardComprasActivas from "../../components/frontoffice/CardComprasActivas";
import CardProximasCompras from "../../components/frontoffice/CardProximasCompras";
import { useRecoilState } from 'recoil';
import { listingsState, userTokensState, listingIdState } from "../../state";
import { httpGet } from "../../apiClient";
import { useEffect } from "react";

export default function ComprasActivas() {
  const [userTokens, _] = useRecoilState(userTokensState);
  const [listings, setListings] = useRecoilState(listingsState);

  const getListings = async () => {
    const res = await httpGet(`/get_listings`, {}, { token: userTokens });
    setListings(res.data);
  };
  useEffect(() => {
    getListings();
  }, [userTokens])
  
  
  return (
    <>
      <NavBar />

      <Container fixed sx={{ marginTop: 2 }}>
        {/* Compras activas */}
        <Grid
          container
          sx={{ displey: "flex", justifyContent: { xs: "center", md: "left" } }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Compras activas
          </Typography>
        </Grid>
        <Divider component="div" />

        {/* Tarjeta de compras */}
        {listings.map((listing) => {
          return (
            <CardComprasActivas
              listingId={listing.id}
              title={listing.name}
              description={listing.description}
            />
          );
        })}

        {/* Próximas Compras */}
        <Grid
          container
          sx={{
            displey: "flex",
            marginTop: 2,
            justifyContent: { xs: "center", md: "left" },
          }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
            Próximas compras
          </Typography>
        </Grid>
        <Divider component="div" />

        {/* Tarjeta proxima compras */}
        <CardProximasCompras />
      </Container>
    </>
  );
};