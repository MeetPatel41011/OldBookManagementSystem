import React from "react";
import NavBarComponent2 from "./NavBarComponent2";
import NavbarCommon from "./NavbarCommon";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "./firebase";
import { useState } from "react";
import "./BooksComponent.css";
import { authentication } from "./firebase";

export default function ParticularBookComponent(props) {
  var bookName = props.booknamE;
  var type = props.typE;
  var description = props.descriptioN;
  var price = props.pricE;

  const addCart = async () => {
    try {
      const docRef = await addDoc(
        collection(db, authentication.currentUser.email),
        {
          BookName: bookName,
          Type: type,
          Description: description,
          Price: price,
          email: authentication.currentUser.email,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log();
  };
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

      <div className="main" onClick={this.changeColor}>
        <div className="cardbooks">
          <div className="cardbooks_image">
            {" "}
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
          </div>
          <div className="cardbooks_title title-white">
            <p>{props.booknamE}</p>
            <p>{props.descriptioN}</p>
            <p>{props.pricE}</p>
            <p>{props.typE}</p>
            <p>{props.emaiL}</p>
            <button className="btn" onClick={addCart}>
              Click
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
