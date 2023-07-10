import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Products() {
  return (
    <div>
        <Navbar />
        {products.map((product) => (
            <Link to={`/products/${product.id}`} >      
                <div key={product.id}>
                    <img src={product.img} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            </Link>
        ))};
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
