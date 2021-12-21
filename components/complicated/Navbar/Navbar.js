// react
import React from "react";
// components
import NavSM from "./NavSM";
import NavLG from "./NavLG";
// etc
import { withSize } from "react-sizeme";

function Navbar(props) {
  const { width } = props.size;

  return (
    <>
      {width >= 900 && <NavLG/>}
      {width < 900 && <NavSM/>}
    </>
  );
}

export default withSize()(Navbar);
