import "./App.css";
import withSplashScreen from "./withSplashScreen";
import NavbarCommon from "./components/NavbarCommon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellersPage from "./components/SellersPage";
import Buyerscart from "./components/Buyerscart";
import MainScreen from "./components/MainScreen";
import LoginSignUp from "./components/LoginSignUp";
import LoginCard from "./components/LoginComponent";
import RegisterPage from "./components/RegisterPage";
import SignInUser from "./components/SignInPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCommon />
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="SellersPage" element={<SellersPage />}></Route>
          <Route path="Buyerscart" element={<Buyerscart />}></Route>
          <Route path="login-signup" element={<LoginSignUp />}></Route>
          <Route path="addBook" element={<LoginCard />}></Route>
          <Route path="RegisterPage" element={<RegisterPage />}></Route>
          <Route path="SignInUser" element={<SignInUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withSplashScreen(App);
