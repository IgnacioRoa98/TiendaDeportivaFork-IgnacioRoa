import "../ProductosContainer/ProductosContainer.css";
import { useState, useEffect } from "react";
import ProductosList from "../ProductosList/ProductosList";

const productos = [
  {
    id: "1",
    title: "Straps",
    text: "Straps con aperturas en los dedos, para mejorar el agarre seas el ejercicio que realices.",
    img: "../images/straps.jpeg",
  },
  {
    id: "2",
    title: "Guantes",
    text: " Guantes de boxeo profecionales, variedad en colores",
    img: "../images/guante.jpeg",
  },
  {
    id: "3",
    title: "Vendas",
    text: "Vendas de varios colores, para una mayor estabilidad en la muñeca",
    img: "../images/vendas.jpeg",
  },
  {
    id: "4",
    title: "Colchoneta yoga",
    text: "Colchoneta recofortable de yoga",
    img: "../images/colchoneta.jpeg",
  },
];
const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};
const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>NUESTROS PRODUCTOS</h1>
      <ProductosList productos={productos} />
    </div>
  );
};
export default ProductosContainer;
