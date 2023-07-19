import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { ProductContext } from '../ProductsContext';

function Products() {
    const products = useContext(ProductContext)
    return (
        <div className='box-border bg-white'>
            <Navbar />
            <div className='flex flex-row flex-wrap justify-around'>
                {products.map((product) => (
                    <Link to={`/products/${product.id}`} >
                        <div key={product.id} className='py-4 px-4 bg-teal-800 w-52 m-3 rounded-xl shadow-lg space-y-2 flex-grow'>
                            <img src={product.image} alt={product.name} className='m-auto fill-current text-gray-500' />
                            <h3 className='text-lg text-white font-semibold space-y-0.5'>{product.name}</h3>
                            <p className='text-white text-4xl space-y-0.5'>{product.price}</p>
                        </div>
                    </Link>
                ))};
            </div>
        </div>
    )
}

export default Products
//block w-fit h-24 sm:mx-0 sm:shrink-0 
//font-medium
//key={product.id
   

//sm:py-4 sm:flex sm:flex-wrap sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6
