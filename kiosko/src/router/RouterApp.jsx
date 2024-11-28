import { Routes, Route } from "react-router-dom";
import {
  Home,
  Categorias,
  Descuentos,
  Nosotros,
  Productos,
} from "../kioskoCirilla/pages/";

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/descuentos" element={<Descuentos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  );
};
