// react
import React from 'react';
// components
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  return props.w >= 900 ? <NavLG {...props} /> : <NavSM {...props} />;
}

export default Navbar;
