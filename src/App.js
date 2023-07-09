
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact.js';
import TodoList from './components/TodoList.js';
import ShoppingCart from './components/ShoppingCart.js';
import { CartProvider } from './components/CartProvider.js';
import { TodoProvider } from './components/TodoProvider.js';

import Navbar from './components/Navbar';
import Cart from './components/Cart';
const App=()=> {

const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <BrowserRouter>
    <Navbar/>
      <CartProvider>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/shopping" element={<ShoppingCart />} />
            <Route path='/cart' element={<Cart cart={cart} />}/>
           
          </Routes>
        </TodoProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
