import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Create({onClose}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
    <button 
      variant="primary" 
      onClick={handleShow} 
      className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded m-auto"
      >
        Create Product
      </button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div class="md:w-1/3">
                <label 
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                  for="name"
                >
                    Name:<br/>
                </label>
            </div>
            <div class="md:w-2/3">
                <input 
                    id="name" 
                    onChange={(e) => setProductName(e.target.value)} 
                    required 
                    type="text" 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    value={productName}
                    />
            </div>
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 for="amount"
                >
                Amount:<br/>
                </label>
            </div>
            <div class="md:w-2/3">
                <input 
                onChange={(e) => setAmount(parseInt(e.target.value))} 
                required 
                type="number" 
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="amount" value={amount}/>
            </div>
                <label 
                    for="description" 
                    className='text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >
                Description:<br/>
                    <textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        rows="6" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="write a brief description..."
                    />
                </label>
            <br />
            <div className="md:w-2/3">
                <input 
                    onChange={(e) => setProductName(e.target.value)} 
                    required 
                    type="text" 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="name" 
                    value={productName}
                />
            </div>
            <div className="md:w-1/3">
                <label 
                    className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    for="price"
                >
                    Price:<br/>
                </label>
            </div>
            <div className="md:w-2/3">
                <input 
                    onChange={(e) => setAmount(parseInt(e.target.value))} 
                    required type="number" 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="price" 
                    value={amount}
                />
            </div>
            <br />
                <label 
                  for="category" 
                  className='mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Category:<br/>
                  <select 
                    id="category" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    required 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option value="">-- Select Category --</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Trousers">Trousers</option>
                  </select>
                </label>
              <br />
                <label 
                    for="sizes" 
                    className='mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                Sizes:<br />
                  <select 
                    id='sizes' 
                    value={selectedSizes} 
                    onChange={(e) => setSelectedSizes(Array.from(e.target.selectedOptions, (option) => option.value))}
                    required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </label>
              </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Create;