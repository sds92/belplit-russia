// react
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../complicated';
export default function NavLGItem(props) {
  const {
    item: { show, activeLink, name, title, items },
  } = props;
  const [stroke, setStroke] = React.useState('#5d5e75');
  const [openMenu, setOpenMenu] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const router = useRouter();
  const { state, toggleMenu } = useMenuState();
  
  return (
    <div className={`relative`}>
      <div className={`flex hover:text-belplit`}>
        {show && activeLink && (
          <Link href={`/${name}`}>
            <a>{title}</a>
          </Link>
        )}
        {items.filter((item) => item.show).length !== 0 && (
          <Menu
            menuButton={({ open }) => {
              open ? setOpenMenu(true) : setOpenMenu(false);
              return (
                <MenuButton>
                  <div
                    className={`flex`}
                    onMouseEnter={() => setStroke('#38a000')}
                    onMouseLeave={() => setStroke('#5d5e75')}
                  >
                    {title}
                    &nbsp;
                    <Icons.ChevronDown
                      stroke={stroke}
                      extraClasses={`
                  ${!open ? `rotate-180` : ''}
                  w-6 h-6 cursor-pointer rounded-full transition-all`}
                    />
                  </div>
                </MenuButton>
              );
            }}
          >
            <Transition
              show={openMenu}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              {items.map((innerItem, index) => (
                <MenuItem
                  key={`NAVLGINNER${index}`}
                  onClick={() => router.push(`/${name}/${innerItem.name}`)}
                  className={`hover:text-belplit w-60`}
                  onMouseEnter={() => setHover({ [index]: true })}
                  onMouseLeave={() => setHover({ [index]: false })}
                >
                  <span
                    className={`trans-menu-item transition-duration-500 ${
                      !hover[index] ? 'w-1 opacity-0' : 'w-2 opacity-100'
                    }`}
                  >
                    {'>'}
                  </span>
                  &nbsp;{innerItem.title}
                </MenuItem>
              ))}
            </Transition>
          </Menu>
        )}
      </div>
    </div>
  );
}
