// react
import React from 'react';
// components
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  const { lgView } = props;

  return <>{lgView ? <NavLG /> : <NavSM />}</>;
}

export default Navbar;
