import "../ProductosContainer/ProductosContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from asyncMock;
import ProductosList from "../ProductosList/ProductosList";
import { useParams } from "react-router-dom";

export const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId }=useParams ()
  useEffect(() => {
    if(categoryId) {
      getProductsByCategory(categoriaId)
      .then (response=>{
        setProductos(response)
      })

    } else{
      getProductos()
      .then(response => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });

    }
    
      
  }, [categoriaId]);

  return (
    <div className="di">
      <h1>NUESTROS PRODUCTOS</h1>
      <ProductosList productos={productos} />
    </div>
  );
};
export default ProductosContainer;
