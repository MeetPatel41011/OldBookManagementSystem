import React from "react";
import NavbarCommon from "./NavbarCommon";
import NavBarComponent2 from "./NavBarComponent2";

export default function FirstScreen() {
  return (
    <>
      <NavBarComponent2 />
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
            Main Page
          </a>
        </header>
      </div>
    </>
  );
}
