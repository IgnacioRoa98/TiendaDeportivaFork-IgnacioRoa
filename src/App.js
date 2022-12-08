import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ProductosContainer from "./components/ProductosContainer/ProductosContainer";
import DetallesContainer from "./components/DetallesContainer/DetallesContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ProductosContainer} />
          <Route path="/categoria/:categoriaId" element={ProductosContainer} />
          <Route path="/detalle/:productoId" element={DetallesContainer} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
