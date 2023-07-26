import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import Navbar from '../Components/Navbar';


const Cart = () => {
    let totalPrice = 0;
    const calculateTotalPrice = () => {
        cartItems.forEach((item) => {
            totalPrice += item.price *item.quantity;
        });
        return totalPrice.toFixed(2);
    };
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <Navbar />
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className='table'>
                            <table>
                                 <tr>
                                    <th>Item No.</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>price</th>
                                </tr>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                                <caption>Total Price: ${calculateTotalPrice()}</caption>
                            </table>
                            <></><button onClick={() => console.log('Proceed to checkout')}>Proceed to Checkout</button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart