import React, { useState } from 'react'
import CreateProduct from '../../Components/CreateProduct/CreateProduct';

function AdminHome() {
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false);

  const handleOpenCreateProduct = () => {
    setIsCreateProductOpen(true);
  };
  
  const handleCloseCreateProduct = () => {
    setIsCreateProductOpen(false);
  };
  
  return (
    <div >
      <div>
        <button onClick={handleOpenCreateProduct} className='w-96 h-16 shrink-0 p-20px '>Create Product</button>
        {isCreateProductOpen && <CreateProduct onClose={handleCloseCreateProduct} />}
      </div>
      <div>
        <button onClick={handleOpenCreateProduct} className='w-96 h-16 shrink-0'>Update Product</button>
        {isCreateProductOpen && <CreateProduct onClose={handleCloseCreateProduct} />}
      </div>
    </div>
  )
    
}

export default AdminHome