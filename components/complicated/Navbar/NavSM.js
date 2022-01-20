// react
import React from 'react';
import Link from 'next/link';

// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// etc
import { Icons, Logo, Social } from '../';
import { menu } from '../../../configs/menu';
import app from '../../../data/app.json';

export default function NavSM(props) {
  return (
    
    <nav className={`flex items-center gap-2 justify-between h-10 relative`}>
      <div className={`flex gap-1 h-10`}>
        <Menu
          className={'menu top-2'}
          menuButton={
            <MenuButton>
              <Icons.Menu
                extraClasses={`w-8 h-8 cursor-pointer active:border rounded-md transition-all text-belplit`}
              />
            </MenuButton>
          }
          transition
        >
          {menu.map(({ show, activeLink, title, items, name }, index) => (
            <React.Fragment key={`NAVSM${index}`}>
              {show && activeLink && (
                <MenuItem key={`MenuItem${index}`} className={`menuItem `}>
                  <Link href={`/${name}`}>
                    <a className='menuItemTitle  w-full'>{title}</a>
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
                            <a className='menuItemTitle w-full '>{innerItem.title}</a>
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
              <a href={`tel:${app.contacts.phones[0]}`} className={`text-belplit`}>
                {app.contacts.phones[0]}
              </a>
            </div>
          </MenuItem>
          <MenuItem>
            <div className={`flex my-1`}>
              <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
              <a href={`tel:${app.contacts.phones[1]}`} className={`text-belplit`}>
                {app.contacts.phones[1]}
              </a>
            </div>
          </MenuItem>
          <hr />
        </Menu>
        {/* <div className={`bg-gray-400 my-1`} style={{ width: 1 }} /> */}
      </div>

      {!props.isOnTop && <div className={`flex`}>
        <Logo
          extraClasses={`${props.lgView ? 'logo' : 'h-8 w-8 my-auto '} transition-all place-self-start`}
        />
      </div>}
      <div className={`flex gap-2 mr-2 items-center`}>
        <Social />
      </div>
    </nav>
  );
}
