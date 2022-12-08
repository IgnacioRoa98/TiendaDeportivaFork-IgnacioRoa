import { useState, useEffect } from "react";
import { getProductById } from "../ProductosContainer/ProductosContainer";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador"
const DetallesContainer = () => {
  const [productos, setProductos] = useState({});
  const {productoId} =useParams ()
  useEffect(() => {
    getProductById(productoId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productoId]);
  return (
    <div>
      <h1>DETALLE DEL PRODUCTO</h1>
      <div>
        <h1>{productos.title}</h1>
        <img src={productos.img} alt={productos.title} />
        <p>{productos.text}</p>
        <h2>$ {productos.precio}</h2>
        <Contador stock={productos.stock} />
      </div>
    </div>
  );
};
export default DetallesContainer;
