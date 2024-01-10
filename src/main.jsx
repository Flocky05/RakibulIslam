import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Projects from './component/Pojects/Projects';
import Contract from './component/Contract/Contract';
import Main from './component/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/about",
        element:<About></About>
      },{
        path:"/skills",
        element:<Skills></Skills>
      },{
        path:"/projects",
        element:<Projects></Projects>
      },{
        path:"/contract",
        element:<Contract></Contract>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
