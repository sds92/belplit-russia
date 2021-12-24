// react
import React from 'react';
// components
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  const { lgView, children } = props;

  return (
    <div className={`p-1 ${!lgView ? `flex justify-between items-center` : ``}`}>
      {lgView ? <NavLG /> : <NavSM />}
      {children}
    </div>
  );
}

export default Navbar;
