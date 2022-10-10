import React from "react";
import LoginCard from "./LoginComponent";
import "./LoginComponent.css";
import NavbarCommon from "./NavbarCommon";
import { Button, FormControl } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TextInput } from "react-native";

export default function AddBookComponent() {
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
                // value={email}
                // onChangeText={(text) => setEmail(text)}
                //id="standard-basic"
                label="Phone Number / Email Address"
                //variant="standard"
                className="textInput"
                type="text"
              />
            </FormControl>
            <br />
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Type of book"
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Description"
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextInput
                placeholder="Price"
                label="Password"
                className="textInput"
                type="text"
              />
            </FormControl>
           
            <br />

            <Button size = "large" className="contained">Add</Button>

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
