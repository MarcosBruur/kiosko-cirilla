import { Icono } from "./Icono";

export const Elegirnos = () => {
  const parrafos = [];
  parrafos.push(
    "Nos aseguramos de conseguir productos al mejor precio posible, siempre cuidando la billetera de nustros clientes, PD: si, son productos legales"
  );
  parrafos.push(
    "Kiosko Cirilla cuenta con productos exlusivos de calidad premium, nuestro equipo de revision (dos monos chinpancé) se encargan de asegurar la calidad e integridad de cada producto "
  );
  parrafos.push(
    "Con nuestro innovador sistema de entregas nos aseguramos que los productos siempre lleguen sin demora a lo estipulado (ponemos fechas de entregas con 3 meses de demora para asegurarnos)"
  );
  return (
    <>
      <h2>¿Por qué Elegirnos?</h2>
      <div className="iconos-elegirnos">
        <Icono
          texto="El mejor precio"
          imagen="icono1.svg"
          parrafo={parrafos[0]}
        />
        <Icono
          texto="Productos de calidad"
          imagen="icono2.svg"
          parrafo={parrafos[1]}
        />
        <Icono
          texto="Entregas a tiempo"
          imagen="icono3.svg"
          parrafo={parrafos[2]}
        />
      </div>
    </>
  );
};
