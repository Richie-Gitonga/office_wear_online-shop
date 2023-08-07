//import logo from './logo.svg';
import './App.css';
import PageNotFound from './Pages/PageNotFound';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AdminNav from './Components/AdminNav/AdminNav';
import AdminHome from './Pages/Admin-dashboard/AdminHome';
import AdminFooter from './Components/AdminFooter';

import Orders from './Pages/Orders';


function App() {
  

//create a main layout for all pages
  const Layout = () => {
    return(
      <div>
      <AdminNav/>
      <div className='container'>
        <div className="contentContainer">
          <Outlet/>
        </div>
      </div>
      <div className='bg-white rounded-lg shadow dark:bg-gray-900 m-4'>
      <AdminFooter/>
      </div>
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
      path: "/Orders",
        element: <Orders />
      },
      {
      path: "*",
        element: <PageNotFound />
      },
  ]
       
    }
  ]);
  //main function to render pages according to router object
  return (
    <div>
    <RouterProvider router={router} />
    </div> 
  );
}

export default App;
