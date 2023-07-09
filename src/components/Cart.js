import React from "react";
import { useState } from "react";
import "../css/Cart.css"
function Cart({ cart }) {
  const [cartItems, setCartItems] = useState(cart);

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.imdbID !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h3>Cart Items:</h3>
      <ul className="cart-list">
        {cartItems?.map((item) => (
          <li key={item.imdbID}>
            <p className="cart-title">
            {item.Title} - {item.Year} 

            </p>
            <img src={item.Poster} alt="img"/>
            <button onClick={() => removeItemFromCart(item.imdbID)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Items: {cartItems?.length}</p>
    </div>
  );
}

export default Cart;
