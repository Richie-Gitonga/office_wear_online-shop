import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Products() {
  return (
    <div className='box-border '>
        <Navbar />
        <div className='flex flex-row flex-wrap'>
        {products.map((product) => (
            <Link to={`/products/${product.id}`} >      
                <div key={product.id} className='py-8 px-8 max-w-sm m-3 bg-gray-400 rounded-xl shadow-lg space-y-2 flex flex-row '>
                    <img src={product.img} alt={product.name} className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg'/>
                    <h3 className='text-lg text-black font-semibold space-y-0.5'>{product.name}</h3>
                    <p className='text-slate-500 font-medium space-y-0.5'>{product.price}</p>
                </div>
            </Link>
        ))};
        </div>
    </div>
  )
}

export default Products
//key={product.id}
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
]

//sm:py-4 sm:flex sm:flex-wrap sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6
