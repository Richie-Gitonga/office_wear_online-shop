//import logo from './logo.svg';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';
import PageNotFound from './Pages/PageNotFound';
import { CartProvider } from './CartContext';


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
     </> 
  );
}

export default App;
