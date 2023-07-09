import React, { useState } from "react";
import axios from "axios";
import "../css/Shopping.css";
import Cart from "./Cart";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [cart, setCart] = useState([]);


  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchInput}&type=movie&apikey=28a2ff0`
      );

      if (response.data.Response === "False") {
        setError("No results found");
        setItems([]);
      } else {
        setItems(response.data.Search);
        setSearchInput("")
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setItems([]);
    }

    setLoading(false);
  };

  const addItemToCart = (item) => {
    const updatedCart = [...cart];

    const existingItem = updatedCart.find(
      (cartItem) => cartItem.imdbID === item.imdbID
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      updatedCart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.imdbID !== itemId);
    setCart(updatedCart);
  };



  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    fetchItems();
  };
  return (
    <div className="shopping-container">
      <h2>Shopping Cart</h2>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search movie here...."
        />
        <button onClick={handleSearchButtonClick} className="btn">Search Movie</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {items.length === 0 ? (
            <p>No results found</p>
          ) : (
            <>
              <ul className="shopping-list">
                {items.map((item) => (
                  <li key={item.imdbID}>
                    <p className="title">
                      {item.Title} -  {item.Year}
                    </p>
                 
                    <img src={item.Poster} alt="img"/>
                    <button onClick={() => addItemToCart(item)}>
                      Add to Cart
                    </button>
                  </li>
                ))}
              </ul>

              <Cart
                cart={cart}           
                removeItemFromCart={removeItemFromCart}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
