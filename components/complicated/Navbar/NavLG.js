// react
import React from 'react';

// etc
import NavLGItem from './NavLGItem';
import { menu } from '../../../configs/menu';

export default function NavLG() {

  return (
    <div className={`flex flex-row flex-nowrap justify-center gap-2`}>
      {menu.map((item, index) => (
        <NavLGItem item={item} key={`NAVLG${index}`} i={index} />
      ))}
    </div>
  );
}
