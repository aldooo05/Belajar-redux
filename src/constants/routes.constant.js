import LoginPage from "../component/login.component";
import HomePage from "../pages/home.page";
import Products from "../pages/products.page";
import UserPage from "../pages/user.page";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product",
    element: <Products />,
  },
];
