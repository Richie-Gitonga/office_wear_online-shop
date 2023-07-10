import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';



function ProductDetails () {
    const {id} = useParams();
    const product = products.find((product) => product.id === Number(id));

    const [ selectSize, setSelectedSize ] = useState('')
    const [ selectQuantity, setSelctedQuantity ] = useState(1); 
    const { addToCart } = useContext(CartContext);

    const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    };

    const HandleAddToCart = () => {
        
        const cartItems = 
            {
            name : product.name,
            price: product.price,
            quantity : selectQuantity,
            size : selectSize,
            }
        addToCart(cartItems);
        console.log(cartItems)
    } 
    
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <label>
                Select Size: 
                <select value={selectSize} onChange={handleSizeChange}>
                    <option  value='' >--Selected Size--</option>
                    {product.sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Quantity:
                <input type='number' min="1" value={selectQuantity} onChange={(e) => setSelctedQuantity(parseInt(e.target.value))} />
            </label>
            <br/>
            <button onClick={HandleAddToCart}>Add to Cart</button>
            <br />
            <Link to="/">Back To Products</Link>
        </div>
    );
}

export default ProductDetails;

    const products = [
        {
            id : 1,
            name: 'Long sleeve black shirt',
            image: 'image.jpeg',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id : 2,
            name: 'checked black-white trouser',
            image: 'image.jpeg',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id : 3,
            name: 'Long sleeve grey shirt',
            image: 'image.jpeg',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id : 4,
            name: 'Plain brown trouser',
            image: 'image.jpeg',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id : 5,
            name: 'Long sleeve white shirt',
            image: 'image.jpeg',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        }
    ];