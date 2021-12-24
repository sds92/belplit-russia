// react
import React from 'react';
import Link from 'next/link';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../complicated';
export default function NavLGItem(props) {
  const {
    item: { show, activeLink, name, title, items },
  } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <div className={`relative`}>
      <div className={`flex`}>
        {show && activeLink && (
          <Link href={`/${name}`}>
            <a>{title}</a>
          </Link>
        )}
        {items.filter((item) => item.show).length !== 0 && (
          <div onClick={() => setOpen(!open)}>
            <Menu
              menuButton={
                <MenuButton>
                  <div className={`flex`}>
                    {title}
                    <Icons.ChevronDown
                      stroke={'#5d5e75'}
                      extraClasses={`
                  ${open ? `rotate-180` : ''}
                  w-6 h-6 cursor-pointer active:border rounded-full transition-all`}
                    />
                  </div>
                </MenuButton>
              }
            >
              {items.map((innerItem, index) => (
                <MenuItem key={`NAVLGINNER${index}`}>
                  <Link href={`/${name}/${innerItem.name}`}>
                    <a>{innerItem.title}</a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}
