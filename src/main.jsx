import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import ShopCategory from "./components/ShopCategory/ShopCategory.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Product from "./components/Product/Product.jsx";
import { Provider } from "react-redux"
import clothStore from "./store/index.js";
import Login from "./components/Forms/Login.jsx";
import Signup from "./components/Forms/Signup.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Orders from "./components/MyOrders/Orders.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      { path: "/men", element: <ShopCategory category="men" /> },
      {
        path: "/women",
        element: <ShopCategory category="women" />,
      },
      { path: "/kids", element: <ShopCategory category="kids" /> },
      { path: "/cart", element: <Cart/> },
      {path:"/product",element:<Product/>,children:[{
        path:":productId",element:<Product/>
      }]},
      {path:"/login",element:<Login/>},
      {path:"/signup" , element:<Signup/>},
      {path:"/shipping",element:<Shipping/>},
      {path:"/checkout",element:<Checkout/>},
      {path:"/orders",element:<Orders/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={clothStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
