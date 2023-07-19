import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { ProductContext } from '../ProductsContext';



function ProductDetails () {
    const {id} = useParams();
    const products = useContext(ProductContext)
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
    } 
    
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div key={product.id} className='h-3/4 p-6 bg-teal-300 flex items-center'>
            <div className='shrink-0'>
                <Link to="/" ><img src="./logo/back.png" alt=''className='absolute top-0'/></Link>
                <img src={product.image} alt={product.name} className='h-3/4 w-8/12'/>
            </div>
            <div className='text-l font-medium text-slate-800 flex-col items-center'>
            <p >{product.name}</p>
            <p >{product.description}</p>
            <p  >{product.price}</p>
            <label>
                Select Size:<br /> 
                <select value={selectSize} onChange={handleSizeChange}>
                    <option  value='' >
                        <span className=' my-2 w-4 h-3 border-solid rounded border-black'>--Selected Size--</span>
                    </option>
                    {product.sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Quantity:<br/>
                <input className='my-2 border-solid rounded border-black ' 
                type='number' min="1" value={selectQuantity} onChange={(e) => setSelctedQuantity(parseInt(e.target.value))} />
            </label>
            <br/>
            <button onClick={HandleAddToCart} className='px-4 py-1 m-auto text-sm text-slate-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'>Add to Cart</button>
            </div>
            <br />
            </div>
            
            
       
    );
}

export default ProductDetails;