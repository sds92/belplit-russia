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
          {show && activeLink && (
            <MenuItem key={`NAVSM${index}`} className={`menuItem`}>
              <Link href={`/${name}`}>
                <a className='menuItemTitle w-full'>{title}</a>
              </Link>
            </MenuItem>
          )}
          {items.filter((item) => item.show).length !== 0 && (
            <>
              {show && !activeLink && (
                <SubMenu label={title}>
                  {items.map((innerItem, index) => (
                    <MenuItem className={`menuItem`} key={`NAVSMINNER${index}`}>
                      <Link href={`/${name}/${innerItem.name}`}>
                        <a className='menuItemTitle w-full'>{innerItem.title}</a>
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
      <MenuItem>
        <div>
          <a href='tel:88005337881'>{app.contacts.phone1}</a>
        </div>
      </MenuItem>
      <MenuItem>
        <div>
          <a href='tel:88005337881'>{app.contacts.phone2}</a>
        </div>
      </MenuItem>
      <hr />
    </Menu>
  );
}
