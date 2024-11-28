/* eslint-disable react/prop-types */

export const Categoria = ({ nombre, imagen }) => {
  return (
    <>
      <a href="">
        <div className="producto">
          <div className="producto-imagen">
            <img src={imagen || "logo.jpg"} alt="Imagen de" />
          </div>

          <div className="producto-texto">
            <h3>{nombre}</h3>
          </div>
        </div>
      </a>
    </>
  );
};
