import "../ProductosList/ProductList.css";
import Product from "../Productos/Product";
const ProductosList = ({ productos }) => {
  return (
    <div className="Prod">
      {productos.map((productos) => (
        <Product key={productos.id} productos={productos} />
      ))}
    </div>
  );
};
export default ProductosList;
