import { useState } from "react";

function CartProvider({ title, price }) {
  const [showData, setShowData] = useState({});

  function addToCart() {
    setShowData({
      title: title,
      price: price
    });
  }

  return (
    <div>
      <button onClick={addToCart}>Add to Cart</button>
      <h1>{showData.title}</h1>
      <p>{showData.price}</p>
    </div>
  );
}

export default CartProvider;