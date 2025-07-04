import { Link } from "react-router-dom";
import useCart from "../context/useCart";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        <svg
          className="cart-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          width="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-2h10v-2H7v2zm0-4h10V8H7v4zm10 6c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z" />
        </svg>{" "}
        ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
