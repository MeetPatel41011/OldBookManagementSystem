import React from "react";
import NavbarCommon from "./NavbarCommon";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./BookForSell.css"

export default function BookForSell() {
  const addBookBtn = () => {
    navigate("/addbookcomponent");
  };
  const navigate = useNavigate();

  return (
    <>
      <NavbarCommon />
      <div className="centerSell">
        All books user want to sell will see here.
      </div>
      <div className="bookforsell">
        <Button onClick={addBookBtn}>Add Book For Sell</Button>
      </div>
    </>
  );
}
