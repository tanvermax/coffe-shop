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
import CoffeeeeCard from './Components/Navber/CoffeeeeCard.jsx';
// import AllCard from './Components/Pages/AllCard.jsx';
import SingleCard from './Components/Pages/SingleCard.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<CoffeeeeCard></CoffeeeeCard>,
            loader: ()=>fetch('../coffees.json'),
          },
          {
            path:'/category/:catego',
            element:<CoffeeeeCard></CoffeeeeCard>,
            loader: ()=>fetch('../coffees.json'),
          }
        ]
       
      },
     
      {
        path:'/coffee/:id',
        element:<SingleCard></SingleCard>,
        loader: ()=>fetch('../coffees.json'),

      },
      {
        path:'/coffees',
        element:<Coffees></Coffees>,
        loader: ()=> fetch('../coffees.json'),
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
