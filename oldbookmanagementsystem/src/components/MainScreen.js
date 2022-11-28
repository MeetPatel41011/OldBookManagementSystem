import React from "react";
import NavBarComponent2 from "./NavBarComponent2";
import NavbarCommon from "./NavbarCommon";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { app, db, authentication } from "./firebase";
import { useState, useEffect } from "react";
import BooksComponent from "./BooksComponent";
import { async } from "@firebase/util";
import "./MainScreen.css";
export default function MainPage() {
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
    const [email, setEmail] = useState("");

  var nameDict = {};
  var discription_dict = {};
  var type_dict = {};
  var price_dict = {};
  var eamil_dict = {};
 
  useEffect(() => {
    const ReadData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(bookName);
        var id = String(doc.id);
        nameDict[id] = doc.data().BookName;
        discription_dict[id] = doc.data().Description;
        type_dict[id] = doc.data().Type;
        price_dict[id] = doc.data().Price;
        eamil_dict[id] = doc.data().email;
        setBookName(nameDict);
        setDescription(discription_dict);
        setPrice(type_dict);
        setType(price_dict);
        setEmail(eamil_dict)
        console.log(typeof(bookName));
      });
    };
    ReadData();
  }, []);

  console.log(nameDict.length);
  return (
    <>
      <NavbarCommon />

      <div className="maindiv">
        {Object.keys(bookName, description, price, type, email).map((key) => {
          return (
            <div>
              {/* <p>{key}</p> */}
              <BooksComponent
                booknamE={bookName[key]}
                descriptioN={description[key]}
                pricE={price[key]}
                typE={type[key]}
                emaiL={email[key]}
             />
            </div>
          );
        })}
      </div>
    </>
  );
}
