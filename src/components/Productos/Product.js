import "../Productos/Product.css";
const Products = ({ productos }) => {
  return (
    <div className="Card">
      <h2>{productos.title}</h2>
      <p>{productos.categoria}</p>
      <img src={productos.img} className="imgBody"></img>
      <p>{productos.text}</p>
      <p>{productos.precio}</p>
      <link to={`/text/${productos.id}`}>Ver detalle</link>
    </div>
  );
};
export default Products;
