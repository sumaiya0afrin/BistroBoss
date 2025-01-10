import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

import ContactUs from "../pages/contact/ContactUs";
import DashBoard from "../dashboard/DashBoard";
import Cart from "../pages/dashboard/cart/Cart";
import Error from "../pages/error/Error";
import UserHome from "../pages/dashboard/userHome/UserHome";
import Reservation from "../pages/dashboard/reservation/Reservation";
import MyBooking from "../pages/dashboard/myBooking/MyBooking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
