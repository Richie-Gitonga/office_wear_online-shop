import React from 'react'

const cart = ({catItems}) => {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price *item.quantity;
        });
        return totalPrice.toFixed(2);
    };

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div>
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
                            <button onClick={() => console.log('Proceed to checkout')}></button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart