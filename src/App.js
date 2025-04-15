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
import Protected from './features/auth/components/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected><Home></Home></Protected>),
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
    element:(<Protected><CartPage></CartPage></Protected>)
  },
  {
    path:'/checkout',
    element:(<Protected><CheckoutPage></CheckoutPage></Protected>)
  },
  {
    path:'/product-details',
    element:(<Protected><ProductDetailsPage></ProductDetailsPage></Protected>)
  },
  {
    path: '/product-details/:id',
    element: <Protected><ProductDetailsPage></ProductDetailsPage></Protected>
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
