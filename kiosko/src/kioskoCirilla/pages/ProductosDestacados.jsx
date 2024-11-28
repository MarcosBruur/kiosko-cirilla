import { useEffect, useState } from "react";
import { Producto } from "../components/secciones/Producto";
import { obtenerDestacados } from "../../api";

export const ProductosDestacados = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        const destacados = await obtenerDestacados();
        console.log(destacados);
        setDatos(destacados);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDestacados();
  }, []);

  return (
    <>
      <div className="contenedor seccion">
        <h2>Nuestros Productos destacados</h2>
        <div className="contenedor-destacados">
          {datos.map((dato) => (
            <Producto key={dato.id} id={dato.producto} />
          ))}
        </div>

        <div>
          <a
            href="https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Test%20Certificate&organizationId=1337&issueYear=2018
&issueMonth=2&certUrl=
https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Flearn%2Fcertifications%2Fd365-functional-consultant-sales&certId=1234"
          >
            Generar certificado Linkedin
          </a>
        </div>
      </div>
    </>
  );
};
