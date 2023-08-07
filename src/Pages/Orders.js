import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend API
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders'); // Replace with your backend API endpoint
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleCompleteOrder = async (orderId) => {
    try {
      await axios.put(`/api/orders/${orderId}/complete`); // Replace with your backend API endpoint for updating the status
      // Update the order status locally (optional - for a better user experience)
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: 'completed' } : order
        )
      );
    } catch (error) {
      console.error('Error completing order:', error);
    }
  };

  return (
    <div className='relative overflow-x-auto sm:-mx-6 lg:-mx-8'>
      <h1>Orders </h1>
      <table className='min-w-full text-left text-sm font-light'>
        <thead className='border-b font-medium dark:border-neutral-500'>
          <tr>
            <th scope='col' className='px-6 py-4'>Product Name</th>
            <th scope='col' className='px-6 py-4'>Amount Requested</th>
            <th scope='col' className='px-6 py-4'>Total Price</th>
            <th scope='col' className='px-6 py-4'>User Name</th>
            <th scope='col' className='px-6 py-4'>User Delivery Location</th>
            <th scope='col' className='px-6 py-4'>User Email</th>
            <th scope='col' className='px-6 py-4'>Contact</th>
            <th scope='col' className='px-6 py-4'>Status</th>
            <th scope='col' className='px-6 py-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className='border-b dark:border-neutral-500'>
              <td className='whitespace-nowrap px-6 py-4 font-medium'>{order.productName}</td>
              <td className='whitespace-nowrap px-6 py-4'>{order.amountRequested}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.totalPrice}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.userName}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.userDeliveryLocation}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.userEmail}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.contact}</td>
              <td className="whitespace-nowrap px-6 py-4">{order.status}</td>
              <td>
                {order.status !== 'completed' && (
                  <button
                    onClick={() => handleCompleteOrder(order.id)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Complete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
//