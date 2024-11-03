import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Mainlayout from './Components/Layouts/Mainlayout.jsx';
import Error from './Components/Pages/Error.jsx';
import Home from './Components/Pages/Home.jsx';
import Coffees from './Components/Pages/Coffees.jsx';
import Dashbord from './Components/Pages/Dashbord.jsx';
import Banner from './Components/Navber/Banner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/home',
            element:<Banner></Banner>
          }
        ]
      },
      {
        path:'/coffees',
        element:<Coffees></Coffees>
      },
      {
        path:'/dashbord',
        element:<Dashbord></Dashbord>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
