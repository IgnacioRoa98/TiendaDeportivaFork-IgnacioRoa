import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ProductosContainer from "./components/ProductosContainer/ProductosContainer";
import Contador from "./components/Contador/Contador";

function App() {
  return (
    <div>
      <NavBar />
      <ProductosContainer />
      <Contador inicio={0} stock={10} />
    </div>
  );
}

export default App;
