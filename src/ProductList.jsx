import { useEffect, useState } from "react";
import CartProvider from "./CartProvider";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Product() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setData(data);
      console.log(data);
    }

    Product();
  }, []);

  return (
    <>
      {data.map((product) => (
            <CartProvider key={product.id} title = {product.title}  price = {product.price}/>
      ))}
    </>
  );
}

export default ProductList;