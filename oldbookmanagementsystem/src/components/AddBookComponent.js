import LoginCard from "./LoginComponent";
import "./LoginComponent.css";
import NavbarCommon from "./NavbarCommon";
import { Button, FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextInput } from "react-native";

import { useNavigate } from "react-router-dom";

//firebase firestore
import { useEffect, React, useState } from "react";
import { app, db } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ItemsCard from "./ItemsCard";
import { authentication } from "./firebase";

export default function AddBookComponent() {
  const [bookName, setBookName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const addData = async () => {
    if (bookName !== "") {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          BookName: bookName,
          Type: type,
          Description: description,
          Price: price,
          email: authentication.currentUser.email,
        });
        console.log("Document written with ID: ", docRef.id);
        navigate("/bookforsell");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
alert("Data Added");
    }
    else {
      alert("Please add Data")
    }
  };

  return (
    <>
      <NavbarCommon />
      <div className="center">
        <Card sx={{ maxWidth: 1200, minWidth: 700 }}>
          {/* { <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> } */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Add Book
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Name"
                value={bookName}
                onChangeText={(text) => setBookName(text)}
                //id="standard-basic"
                // label="Phone Number / Email Address"
                //variant="standard"
                className="textInput"
                type="text"
                 
              />
            </FormControl>
            <br />
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Type of book"
                value={type}
                onChangeText={(text) => setType(text)}
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Description"
                value={description}
                onChangeText={(text) => setDescription(text)}
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={(text) => setPrice(text)}
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>

            <br />

            <Button size="large" className="contained" onClick={addData}>
              Add
            </Button>

            {/* <Button className="contained">
          Clear
        </Button> */}

            {/* {isSignedIn === true ? 
          <Button variant="contained" onClick={SignOutUser}>Sign Out</Button>
         : 
          <Button variant="contained" onClick={SignInUser}>Sign In</Button>
        } */}
          </CardContent>
          {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
      </div>
    </>
  );
}