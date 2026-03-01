import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav className="store-header">
      <h2 className="header-text">Store</h2>
      <div className="btn-section">
        <Link className="shop-btn btn" to="/">Shop</Link>
        <Link className="cart-btn btn" to="/cart">Cart <span className="cart-amount">0</span></Link>
      </div>
    </nav>
  );
}

export default Header;
