import { useEffect, useState } from "react";
import { obtenerCategorias } from "../../api";
import { Categoria } from "../components/secciones/";

export const Categorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await obtenerCategorias();
        setCategorias(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCategorias();
  }, []);

  return (
    <>
      <h1>Categorias</h1>
      <div className="contenedor seccion">
        <div className="contenedor-categorias">
          {categorias.map((categoria) => {
            return <Categoria key={categoria.id} {...categoria} />;
          })}
        </div>
      </div>
    </>
  );
};
