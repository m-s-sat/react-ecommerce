import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/Login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path:"/signup",
    element: (<SignupPage></SignupPage>)
  },
  {
    path:'/cart',
    element:(<CartPage></CartPage>)
  },
  {
    path:'/checkout',
    element:(<CheckoutPage></CheckoutPage>)
  },
  {
    path:'/product-details',
    element:(<ProductDetailsPage></ProductDetailsPage>)
  },
  {
    path: '/product-details/:id',
    element: <ProductDetailsPage></ProductDetailsPage>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
