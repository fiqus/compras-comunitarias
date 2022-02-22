import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CompraExitosa } from "../pages/frontoffice/CompraExitosa";
import ComprasActivas from "../pages/frontoffice/ComprasActivas";
import { ListaProductos } from "../pages/frontoffice/ListaProductos";
import { Resumen } from "../pages/frontoffice/Resumen";
import SignIn from "../pages/frontoffice/SigIn";

export const FrontOfficeRuters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="compras-activas" element={<ComprasActivas />} />
        <Route path="lista-productos" element={<ListaProductos />} />
        <Route path="resumen" element={<Resumen />} />
        <Route path="compra-exitosa" element={<CompraExitosa />} />
        {/* <Route path="*" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
