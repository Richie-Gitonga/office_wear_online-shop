import React, { useState } from 'react'
import './CreateProducts.css';

const CreateProduct = ({ onClose }) => {
    const [productName, setProductName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(''); // Assuming categories are fetched from an API or defined elsewhere
    const [selectedSizes, setSelectedSizes] = useState([]);
  
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', productName);
        console.log('Amount:', amount);
        console.log('Description:', description);
        console.log('Price:', price);
        console.log('Category:', category);
        console.log('Selected Sizes:', selectedSizes);
        // Form validation logic here (e.g., check if required fields are filled)
    
        // Create the product object with the form data
        const newProduct = {
          name: productName,
          amount,
          description,
          price,
          category,
          sizes: selectedSizes,
        };
    
        // You can now use the newProduct object to add the product to your database or perform other actions.
        console.log(newProduct)
        // Reset the form after submission
        setProductName('');
        setAmount('');
        setDescription('');
        setPrice('');
        setCategory('');
        setSelectedSizes([]);
      };
      // You can handle the form submission here and send the product details to the backend
      // For simplicity, this example just logs the data to the console
  
    return (
        <div>
        
        <form onSubmit={handleFormSubmit}>
        <h2>Update Product</h2>
          <label>
            Product Name:<br/>
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
          </label>
          <br />
          <label>
            Amount:<br/>
            <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} required />
          </label>
          <br />
          <label>
            Description:<br/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <br />
          <label>
            Price:<br />
            <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
          </label>
          <br />
          <div className='selectContainer'></div>
          <label>
            Category:<br/>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">-- Select Category --</option>
              <option value="Shoes">Shoes</option>
              <option value="Shirts">Shirts</option>
              <option value="Trousers">Trousers</option>
            </select>
          </label>
          <br />
          <label>
            Sizes:<br />
            <select multiple value={selectedSizes} onChange={(e) => setSelectedSizes(Array.from(e.target.selectedOptions, (option) => option.value))} required>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
}
  
export default CreateProduct;