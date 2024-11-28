import { useEffect, useState } from "react";
import { obtenerProductos } from "../../api";
import { Producto } from "../components/secciones";

export const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await obtenerProductos();

        setProductos(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProductos();
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <div className="contenedor seccion">
        <div className="contenedor-producto">
          {productos.map((producto) => {
            return <Producto key={producto.id} {...producto} />;
          })}
        </div>
      </div>
    </>
  );
};
