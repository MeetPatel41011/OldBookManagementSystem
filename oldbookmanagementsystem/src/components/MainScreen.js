import React from "react";
import NavBarComponent2 from "./NavBarComponent2";
import NavbarCommon from "./NavbarCommon"

export default function FirstScreen() {
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
            Main Page
          </a>
        </header>
      </div>
    </>
  );
}
