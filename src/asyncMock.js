const productos = [
    {
      id: "1",
      title: "Straps",
      text: "Straps con aperturas en los dedos, para mejorar el agarre seas el ejercicio que realices.",
      categoria: "Accesorio",
      img: "/images/straps.jpeg",
      stock: "50",
      precio: "$3000",
    },
    {
      id: "2",
      title: "Guantes",
      text: " Guantes de boxeo profecionales, variedad en colores",
      categoria: "Accesorio",
      img: "/images/guante.jpeg",
      stock: "10",
      precio: "$60000",
    },
    {
      id: "3",
      title: "Vendas",
      text: "Vendas de varios colores, para una mayor estabilidad en la muñeca",
      categoria: "Aceesorio",
      img: "/images/vendas.jpeg",
      stock: "100",
      precio: "$2000",
    },
    {
      id: "4",
      title: "Colchoneta yoga",
      text: "Colchoneta recofortable de yoga",
      categoria: "Colchoneta",
      img: "/images/colchoneta.jpeg",
      stock: "20",
      precio: "$4500",
    },
  ];
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
  };
  export const getProductById =(id)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos.find(prod =>{
                return prod.id ===id
            }))
        }, 500)
    })
  }
  export const getProductsByCategory = (categoriaId) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos.filter(prod =>prod.categoria=== categoriaId))
        }, 500)
    })
  }
  
  
  export default productos