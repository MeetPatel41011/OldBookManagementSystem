import React from "react";
// import NavbarCommon from "./NavbarCommon";
import LoginCard from "./LoginComponent";
import "./LoginComponent.css";
import NavBarComponent2 from "./NavBarComponent2";



export default function LoginSignUp() {
  return (
    <>
      <NavBarComponent2 />

      <div className="center">
        <LoginCard />
      </div>
    </>
  );
}
