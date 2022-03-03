import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { CompraExitosa } from "../pages/frontoffice/CompraExitosa";
import ComprasActivas from "../pages/frontoffice/ComprasActivas";
import { ListaProductos } from "../pages/frontoffice/ListaProductos";
import { Resumen } from "../pages/frontoffice/Resumen";
import SignIn from "../pages/frontoffice/SigIn";
import {useRecoilState} from "recoil";
import {userTokensState} from "../state";

export const FrontOfficeRouter = () => {
    const [userToken, _setUserToken] = useRecoilState(userTokensState)
    const whereNavigate = () => {
        if (!userToken) {
            return <Navigate to="/sign-in" />
        } else {
            // TODO: acá deberiamos tener logica que sepa dependiendo
            // que rol tenga (ADMIN o CONSUMIDOR) donde tiene que ir
            return <Navigate to="/compras-activas" />
        }
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={whereNavigate()} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="compras-activas" element={<ComprasActivas />} />
        <Route path="lista-productos" element={<ListaProductos />} />
        <Route path="resumen" element={<Resumen />} />
        <Route path="compra-exitosa" element={<CompraExitosa />} />
        {/* <Route path="*" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
