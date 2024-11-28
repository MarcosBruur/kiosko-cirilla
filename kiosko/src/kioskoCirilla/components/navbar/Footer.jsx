import { Links } from "./Links";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contenedor contenido-footer">
          <Links />
          <p className="copyright">
            Todos los derechos reservados ~Marcos Bruno~ &copy;
          </p>
        </div>
      </footer>
    </>
  );
};
