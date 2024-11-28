/* eslint-disable react/prop-types */
export const Icono = ({ texto, imagen, parrafo }) => {
  return (
    <div className="icono">
      <img src={imagen} alt="icono precio" />
      <h3>{texto}</h3>
      <p>{parrafo}</p>
    </div>
  );
};
