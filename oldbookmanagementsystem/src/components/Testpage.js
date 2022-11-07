import LoginCard from "./LoginComponent";
import "./LoginComponent.css";
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
import ItemsCard from "./ItemsCard";

export default function Testpage() {
  return (
    <>
      <ItemsCard title={"title"} />
    </>
  );
}
