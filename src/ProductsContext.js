import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Long sleeve black shirt',
            image: "./shirts/shirts-1.JPG",
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 2,
            name: 'checked black-white trouser',
            image: './shirts/shirts-2.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 3,
            name: 'checked black-white trouser',
            image: './shirts/shirts-3.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 4,
            name: 'checked black-white trouser',
            image: './shirts/shirts-4.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 5,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-5.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 6,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-6.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 7,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-7.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 8,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-8.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 9,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-9.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 10,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-10.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 11,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-11.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 12,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-12.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 13,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-13.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 14,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-14.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 15,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-15.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 16,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-16.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 17,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-17.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 18,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-18.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 19,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-19.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 20,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-20.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 21,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-21.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 22,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-22.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 23,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-23.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 24,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-24.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 25,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-25.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 26,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-26.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 27,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-27.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 28,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-28.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 29,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-29.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        },
        {
            id: 30,
            name: 'checked black-white trouser',
            image: 'shirts/shirts-30.JPG',
            price: 800,
            sizes: ['S', 'M', 'L', 'Xl'],
        }
    ]);
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};