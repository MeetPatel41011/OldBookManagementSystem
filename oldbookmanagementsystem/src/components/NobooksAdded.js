import React from "react";
import NavbarCommon from "./NavbarCommon";
import { Button, useThemeProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./BookForSell.css";
import { useState, useEffect } from "react";
import BookForSellComonent from "./BookForSellComonent";
import { collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { app, db, authentication } from "./firebase";

export default function NobooksAdded(props) {
 
  return (
    <>
      <NavbarCommon />
      <div className="centerSell">
        No Books Added for {props.use}
      </div>

     
    </>
  );
}
