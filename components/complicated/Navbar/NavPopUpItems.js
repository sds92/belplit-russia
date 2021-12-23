import React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Icons } from '../../complicated';

export default function NavPopUpItems(props) {
  const { children, items, path } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        className={`flex cursor-pointer`}
        id='pop-up-btn'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children && children}
        <Icons.ChevronDown
          stroke={'#5d5e75'}
          extraClasses={`
          ${open ? `rotate-180` : ''}
                  w-6 h-6 cursor-pointer active:border rounded-full transition-all`}
        />
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link href={`/${path}/${item.name}`}>
              <a>{item.title}</a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
