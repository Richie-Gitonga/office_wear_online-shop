//import logo from './logo.svg';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';
import PageNotFound from './Pages/PageNotFound';
import { CartProvider } from './CartContext';
import Cart from './Pages/Cart';
import { ProductProvider } from './ProductsContext';


function App() {
  return (
    <>
    <BrowserRouter>
    <ProductProvider>
    <CartProvider>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
    </> 
  );
}

export default App;


