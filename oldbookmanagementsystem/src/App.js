import "./App.css";
import withSplashScreen from "./withSplashScreen";
import NavbarCommon from "./components/NavbarCommon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SellersPage from "./components/SellersPage";
import Buyerscart from "./components/Buyerscart";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCommon />
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="SellersPage" element={<SellersPage />}></Route>
          <Route path="Buyerscart" element={<Buyerscart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withSplashScreen(App);
