import { useEffect, useState } from "react";
import { obtenerProductoId } from "../../../api";

/* eslint-disable react/prop-types */
export const Producto = ({
  id = null,
  nombre = "",
  descripcion = "",
  imagen = "",
}) => {
  const [datos, setDatos] = useState({
    nombre: nombre,
    descripcion: descripcion,
    imagen: imagen,
  });

  useEffect(() => {
    if (!id) {
      return;
    }
    const getProductoById = async () => {
      try {
        const resultado = await obtenerProductoId(id);
        setDatos(resultado);
      } catch (e) {
        console.error(e);
      }
    };
    getProductoById();
  }, [id]);

  if (!datos) {
    // Muestra un mensaje o un indicador de carga mientras se obtienen los datos
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="producto">
        <img
          src={datos.imagen || "logo.jpg"}
          alt={`Imagen de ${datos.nombre}`}
        />

        <div className="producto-texto">
          <h3>{datos.nombre}</h3>
          <p>{datos.descripcion}</p>
        </div>
      </div>
    </>
  );
};
