import "../Productos/Product.css";
const Products = ({ productos }) => {
  return (
    <div className="Card">
      <h2 >{productos.title}</h2>
      <p>{productos.text}</p>
    </div>
  );
};
export default Products;
