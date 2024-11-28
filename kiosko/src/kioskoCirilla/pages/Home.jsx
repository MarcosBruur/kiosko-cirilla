import { ProductosDestacados } from "./ProductosDestacados";
import { Elegirnos } from "../components/secciones/principal";

export const Home = () => {
  return (
    <>
      <ProductosDestacados />
      <main className="contenedor seccion">
        <Elegirnos />
      </main>
    </>
  );
};
