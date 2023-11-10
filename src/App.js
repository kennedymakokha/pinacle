import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';

import ErrorPage from './error-page';


import About from './about';
import Root from './routes/root';
import Home from './home';



const router = createBrowserRouter([
  {
    path: "/home",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/about-us",
      //   element: <About />,
      // },
     
    ]
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
 
 
]);
function App() {
  
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
