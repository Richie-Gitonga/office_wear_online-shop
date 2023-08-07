import React, { useState } from 'react'
import Create from '../../Components/Modals/Create';


function AdminHome() {
  
  return (
    <div >
      <Create  onclose="{handleClose}"/>
      {/* <div>
        <button onClick={handleOpenCreateProduct} className='bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-300 rounded'>Update Product</button>
        {isCreateProductOpen && <CreateProduct onClose={handleCloseCreateProduct} />}
      </div> */}
    </div>
  )
    
}

export default AdminHome