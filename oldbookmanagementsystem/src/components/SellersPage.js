import React from "react";
import "./SellersPage.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SellersPage() {
  
  return (
    <>
      <div className="meet">
        <Button variant="contained">
          <NavLink to="/login-signup">Add book for sell</NavLink>
        </Button>
      </div>
    </>
  );
}
