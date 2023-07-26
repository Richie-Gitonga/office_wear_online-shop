//import logo from './logo.svg';
import './App.css';
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
      }]
       
    }
  ]);
  //main function to render pages according to router objec
  return (
    <RouterProvider router={router} />
  );
}

export default App;
/**
 * <BrowserRouter>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
 */