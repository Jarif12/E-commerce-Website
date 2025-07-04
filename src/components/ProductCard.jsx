import { Link } from "react-router-dom";
import  useCart  from "../context/useCart";


export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
}
