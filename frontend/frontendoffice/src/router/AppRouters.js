import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CompraExitosa } from "../pages/CompraExitosa";
import ComprasActivas from "../pages/ComprasActivas";
import { ListaProductos } from "../pages/ListaProductos";
import { Resumen } from "../pages/Resumen";
import SignIn from "../pages/SigIn";

export const AppRouters = () => {
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
