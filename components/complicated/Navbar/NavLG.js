// react
import React from 'react';
import Link from 'next/link';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

// etc
import { Icons } from '../../complicated';
import NavLGItem from './NavLGItem';
import { menu } from '../../../configs/menu';
import { app } from '../../../configs/app';

export default function NavLG() {

  return (
    <div className={`flex flex-row flex-nowrap justify-center`}>
      {menu.map((item, index) => (
        <NavLGItem item={item} key={`NAVLG${index}`} i={index} />
      ))}
    </div>
  );
}
