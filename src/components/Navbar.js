import { Link } from "react-router-dom";
import "../css/Navbar.css"
const Navbar =()=>{
    return(
        <div className="nav-container">
       <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
        <li><Link to="/Shopping">ShoppingCart</Link></li>
        <li><Link to="/cart">Cart</Link></li>
       </ul>
        </div>
    )
}
export default Navbar;