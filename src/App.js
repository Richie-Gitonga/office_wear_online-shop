//import logo from './logo.svg';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './Pages/Products';
import PageNotFound from './Pages/PageNotFound';
import { CartProvider } from './CartContext';
import Cart from './Pages/Cart';
import { ProductProvider } from './ProductsContext';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AdminNav from './Components/AdminNav';
import AdminHome from './Pages/Admin-dashboard/AdminHome';
import AdminFooter from './Components/AdminFooter';
import AdminMenu from './Components/AdminMenu';


function App() {
  

//create a main layout for all pages
  const Layout = () => {
    return(
      <div>
      <AdminNav/>
      <div className='container'>
        <div className='menuContainer'>
          <AdminMenu/>
        </div>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <AdminFooter/>
      </div>
    )
  }
//create route objects
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [{
        path: "/",
        element: <AdminHome/>
      },
      {
      path: "/",
        element: <Products />
      },
        {
      path: "/Products/:id",
        element: <ProductDetails />
      },
      {
      path: "*",
        element: <PageNotFound />
      },
      {
      path: "/Cart",
        element: <Cart/>
      },
  ]
       
    }
  ]);
  //main function to render pages according to router objec
  return (
    <>
    <BrowserRouter>
    <ProductProvider>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
    </ProductProvider>
    </> 
  );
}

export default App;
