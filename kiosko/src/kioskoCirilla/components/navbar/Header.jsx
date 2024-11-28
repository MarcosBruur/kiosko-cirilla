import { Links, Titulo, Logo } from "..";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="contenedor contenido-header">
          <Logo />
          <Titulo />
          <Links />
        </div>
      </header>
    </>
  );
};
