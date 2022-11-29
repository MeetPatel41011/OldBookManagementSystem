import React from "react";
import NavBarComponent2 from "./NavBarComponent2";
import NavbarCommon from "./NavbarCommon";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "./firebase";
import { useState } from "react";
import "./BooksComponent.css";
import { authentication } from "./firebase";
import ParticularBookComponent from "./ParticularBookComponent";
import logo from "./logo.svg";
import "./CartData.css";

export default function CartData(props) {  

  // function  GoToParticular() {
  //         navigate("/mainscreen",

  //     booknamE={props.booknamE}
  //     typE={props.typE}
  //     descriptioN={props.descriptioN}
  //     pricE={props.pricE}
  //     emaiL={props.emaiL}
  //         )

  // };
  return (
    <>
      <NavbarCommon />

      {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            MrgMeet Patel
            <br />
            Main Page
          </a> */}

      <div className="main">
        <div className="cardbooks">
          <div className="cardbooks_image btn">
            {" "}
            <img
              src={logo}
              className="App-logo BookForSellComonent"
              alt="logo"
            />
          </div>

          <div className="cardbooks_title title-white">
            <p>{props.booknamE}</p>
            <p>{props.descriptioN}</p>
            <p>{props.pricE}</p>
            <p>{props.typE}</p>
            <p>{props.emaiL}</p>
          </div>
        </div>
      </div>
    </>
  );
}
