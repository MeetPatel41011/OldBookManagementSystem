import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, FormControl } from "@mui/material";
import { useState } from "react";
import { TextInput } from "react-native";
import { authentication } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import SignInUser from "./SignInPage";
import RegisterPage from "./RegisterPage";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [isSignedIn, setIsSignedIn] =
    useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  




  const RegisterUser = () => {
    if (validateEmail(email)) {

    } else {
      //alert(email + " is not valid :(");
    }
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        navigate("/RegisterPage");
      })
      .catch((err) => {
        //   err = err + "";
        //   var err2 = err.split("(").pop();
        //   err = err2.replace(")", "");
        //   alert(err);
        // err = "";
      });
  };


  const SignInUser = () => {
    if (validateEmail(email)) {
      //alert(email + " is valid :)");
      <SignInUser />;
    } else {
      alert(email + " is not valid :(");
    }
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        //setIsSignedIn(true);
                navigate("/SignInUser ");

      })
      .catch((err) => {
        // err = err + "";
        // var err2 = err.split("(").pop();
        // err = err2.replace(")", "");

        // alert(err);
        // err = "";
      });
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then((re) => {
        setIsSignedIn(false);
      })
      .catch((err) => {
        err = err + "";
        var err2 = err.split("(").pop();
        err = err2.replace(")", "");

        alert(err);
        err = "";
      });
  };

  const forgotPassword = (Email) => {
    if (validateEmail(email)) {
      //alert(email + " is valid :)");
    } else {
      alert(email + " is not valid :(");
    }
    console.log("reset email sent to " + email);
    sendPasswordResetEmail(authentication, email, null)
      .then(() => {
        alert("reset email sent to " + Email);
      })
      .catch(function (err) {
        // err = err + "";
        // var err2 = err.split("(").pop();
        // err = err2.replace(")", "");
        
        // alert(err);
        // err = "";
      });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
// const MAX_LEN = 15,
//   MIN_LEN = 6,
//   PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
  
  return (
    <Card sx={{ maxWidth: 1200, minWidth: 500 }}>
      {/* { <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> } */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Login / Sign Up
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            id="standard-basic"
            label="Phone Number / Email Address"
            variant="standard"
          />
        </FormControl>

        <br />
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </FormControl>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <br />
        <br />

        <Button variant="contained" onClick={RegisterUser}>
          Register
        </Button>

        <Button variant="contained" onClick={SignInUser}>
 Sign In
        </Button>

        <Button variant="contained" onClick={forgotPassword}>
          forgotPassword
        </Button>
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
  );
}
