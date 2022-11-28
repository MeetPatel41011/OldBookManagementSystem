import React from "react";
import NavbarCommon from "./NavbarCommon";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./BookForSell.css"
import { useState, useEffect } from "react";
import BookForSellComonent from "./BookForSellComonent"
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { app, db, authentication } from "./firebase";
import NobooksAdded from "./NobooksAdded"

export default function BookForSell() {

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
         setEmail(eamil_dict);
         console.log(typeof bookName);
       });
     };
     ReadData();
   }, []);

  
  const addBookBtn = () => {
    navigate("/addbookcomponent");
  };
  const navigate = useNavigate();

  return (
    <>
      <NavbarCommon />
      {/* <div className="centerSell">
        All books user want to sell will see here.
      </div> */}

      <div className="maindiv">
        {Object.keys(bookName, description, price, type, email).map((key) => {
          if (authentication.currentUser.email === email[key]) {
              return (
                <div>
                  {/* <p>{key}</p> */}

                  <BookForSellComonent
                    booknamE={bookName[key]}
                    descriptioN={description[key]}
                    pricE={price[key]}
                    typE={type[key]}
                    emaiL={email[key]}
                  />
                </div>
              );
          } else {
            {/* return (
            <NobooksAdded use="Sell"/>
            ); */}
          }
          
        })}
      </div>

      <div className="bookforsell">
        <Button onClick={addBookBtn}>Add Book For Sell</Button>
      </div>
    </>
  );
}
