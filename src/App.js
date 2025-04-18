import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import { PageNotFound } from './pages/404';
import { OrderSuccessPage } from './pages/OrderSuccessPage';

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
  },
  {
    path: '/order-success/:id',
    element:(<OrderSuccessPage></OrderSuccessPage>)
  },
  {
    path:'*',
    element:(<PageNotFound></PageNotFound>)
  }
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  console.log(user);
  useEffect(()=>{
    if(user){
      dispatch(fetchItemByUserIdAsync(user.id));
    }
  },[dispatch,user]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
