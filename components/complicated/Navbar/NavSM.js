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
            extraClasses={`w-10 h-10 cursor-pointer active:border rounded-md transition-all text-belplit`}
          />
        </MenuButton>
      }
    >
      {menu.map(({ show, activeLink, title, items, name }, index) => (
        <React.Fragment key={`NAVSM${index}`}>
          {show && activeLink && (
            <MenuItem key={`MenuItem${index}`} className={`menuItem`}>
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
        </React.Fragment>
      ))}
      <hr />
      <MenuItem>
      <div className={`flex my-1`}>
          <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
          <a href={`tel:${app.contacts.phone1}`} className={`text-belplit`}>
            {app.contacts.phone1}
          </a>
        </div>
      </MenuItem>
      <MenuItem>
        <div className={`flex my-1`}>
          <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
          <a href={`tel:${app.contacts.phone2}`} className={`text-belplit`}>
            {app.contacts.phone2}
          </a>
        </div>
      </MenuItem>
      <hr />
    </Menu>
  );
}
