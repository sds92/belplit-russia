// react
import React from 'react';
// components
import { Icons } from '../';
import app from '../../../data/app.json';
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  console.log('🚀 ~ file: Navbar.js ~ line 10 ~ Navbar ~ props', props);
  const { children } = props;
  return <>{props.mdView || props.lgView ? <NavLG {...props} /> : <NavSM {...props} />}</>;
}

export default Navbar;
