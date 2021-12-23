// react
import React from 'react';
import Link from 'next/link';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

// etc
import { Icons } from '../';
import { Text } from '../../lib';
import { menu } from '../../../configs/menu';
import { app } from '../../../configs/app';

export default function NavSM() {
  return (
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
      {menu.map(({ show, activeLink, title, items, name }, index) => (
        <>
          {show && activeLink && <MenuItem key={`NAVSM${index}`}>{title}</MenuItem>}
          {items.filter((item) => item.show).length !== 0 && (
            <>
              {show && !activeLink && (
                <SubMenu label={title}>
                  {items.map((innerItem, index) => (
                    <MenuItem key={`NAVSMINNER${index}`}>
                      <Link href={`/${name}/${innerItem.name}`}>
                        <a>{innerItem.title}</a>
                      </Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              )}
            </>
          )}
        </>
      ))}
      <hr />
      <MenuItem>{app.contacts.phone1}</MenuItem>
      <MenuItem>{app.contacts.phone2}</MenuItem>
      <hr />
      <MenuItem>{app.title}</MenuItem>
    </Menu>
  );
}
