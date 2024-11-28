import "./scss/app.scss";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./router/RouterApp";
import { Header, Footer } from "./kioskoCirilla/components/navbar";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
