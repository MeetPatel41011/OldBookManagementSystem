import LoginCard from "./LoginComponent";
import "./ItemsCard.css";
import NavbarCommon from "./NavbarCommon";
import { Button, FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextInput } from "react-native";


//firebase firestore
import { useEffect, React, useState } from "react";
import { app, db } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore"; 


export default function ItemsCard(props) {
    return (
      <>
        <div className="wrapper">
          <div className="card">
            {/* <img className="card__Img" /> */}
            <div className="card__Body">
              <h2>{props.title}</h2>
              <p className="card__Description">Des</p>
              <h3 className="card__Price">Price</h3>
              <button className="card__Button">cardButton</button>
            </div>
          </div>
        </div>
      </>
    );
}
