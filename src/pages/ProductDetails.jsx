import { useParams } from "react-router-dom";
import { products } from "../assets/products";
import  useCart  from "../context/useCart";


export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product)
    return <P>Product Not Found</P>;
    
    
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}