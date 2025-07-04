import useCart  from "../context/useCart";



export default function Cart() {
    const { cart, removeFromCart } = useCart()
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Your Cart</h1>
            <table>
                <thead><tr><th>Image</th><th>Title</th><th>Price</th><th>Quantity</th><th>Action</th></tr></thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={item.title} width={80} /></td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total-box"><h3>Total: ${total.toFixed(2)}</h3></div>
        </div>
    );
}