import "./App.css";
import withSplashScreen from "./withSplashScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from "./components/FirstScreen";
import MainScreen from "./components/MainScreen"
import LoginSignUp from "./components/LoginSignUp";
import LoginCard from "./components/LoginComponent";
import Cart from "./components/Cart"
import BookForSell from "./components/BookForSell";
import AddBookComponent from "./components/AddBookComponent"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstScreen />}></Route>
          <Route path="/mainscreen" element={<MainScreen />}></Route>
          <Route path="login-signup" element={<LoginSignUp />}></Route>
          <Route path="addBook" element={<LoginCard />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="bookforsell" element={<BookForSell />}></Route>
          <Route path="addbookcomponent" element={<AddBookComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withSplashScreen(App);
