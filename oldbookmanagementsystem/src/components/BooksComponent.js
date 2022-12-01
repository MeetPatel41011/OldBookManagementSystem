import React from "react";
import NavBarComponent2 from "./NavBarComponent2";
import NavbarCommon from "./NavbarCommon";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "./firebase";
import { useState } from "react";
import "./BooksComponent.css";
import { authentication } from "./firebase";
import ParticularBookComponent from "./ParticularBookComponent";
import "./BooksComponent.css";
import "./BookForSellComonent.css";
import logo from "./logo.svg";

export default function BooksComponent(props) {
  var bookName = props.booknamE;
  var type = props.typE;
  var description = props.descriptioN;
  var price = props.pricE;
var eamill = props.emaiL;
  const addCart = async () => {
    try {
      const docRef = await addDoc(
        collection(db, authentication.currentUser.email),
        {
          BookName: bookName,
          Type: type,
          Description: description,
          Price: price,
          email: eamill,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log();
  };

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
          <div className="cardbooks_image">
            {" "}
            <img src={logo} className="App-logo cardlogo" alt="logo" />
          </div>

          <div className="cardbooks_title title-white">
            <p>{props.booknamE}</p>
            <p>{props.descriptioN}</p>
            <p>{props.pricE}</p>
            <p>{props.typE}</p>
            <p>{props.emaiL}</p>
            <button className="addtocart" onClick={addCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
