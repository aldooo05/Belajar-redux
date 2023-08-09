import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import LoginPage from "./component/login.component";
// import RegisterPage from "./component/register.component";
import "bootstrap/dist/css/bootstrap.css";
import Products from "./pages/products.page";
import NavigationBar from "./component/navigation.coponent";
import HomePage from "./pages/home.page";
import UserPage from "./pages/user.page";
import { routes } from "./constants/routes.constant";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavigationBar />
      <Routes>
        {
          routes.map(i=>
            <Route{...i}/>
            )
        }
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
