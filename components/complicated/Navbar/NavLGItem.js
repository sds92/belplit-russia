import React from 'react';
import Link from 'next/link';
import NavPopUpItems from './NavPopUpItems';
import { Icons } from '../../complicated';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function NavLGItem(props) {
  const {
    item: { show, activeLink, name, title, items },
    i,
  } = props;

  return (
    <div className={`relative`}>
      <div className={`flex`}>
        {show && activeLink && (
          <Link href={`/${name}`}>
            <a>{title}</a>
          </Link>
        )}
        {items.filter((item) => item.show).length !== 0 && (
          <>
          <Menu
      menuButton={
        <MenuButton>
          <Icons.Menu
            stroke={'#5d5e75'}
            extraClasses={`w-10 h-10 cursor-pointer active:border rounded-md transition-all`}
          />
        </MenuButton>
      }
    >
      
    </Menu>
          </>
          // <>
          //   {show && !activeLink && (
          //     <NavPopUpItems path={name} items={items}>
          //       {title}
          //     </NavPopUpItems>
          //   )}
          // </>
        )}
      </div>
    </div>
  );
}
