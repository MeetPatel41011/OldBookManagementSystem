import React from "react";
import NavbarCommon from "./NavbarCommon";

export default function Cart() {
  return (
    <>
      <NavbarCommon />
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            MrgMeet Patel
            <br />
            Cart Page
          </a>
        </header>
      </div>
    </>
  );
}
