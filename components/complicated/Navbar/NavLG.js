// react
import React from 'react';
import Link from 'next/link';

// etc
import Logo from '../Svg/Logo';
import NavLGItem from './NavLGItem';
import { Button } from '../../lib';
import { Social, Icons } from '..';
import { menu } from '../../../configs/menu';

export default function NavLG(props) {
  return (
    <div className={`flex justify-center gap-10 h-full my-auto py-2`}>
      <Link href={`/`} passHref>
        <div className={`flex logo-box transition-all cursor-pointer`}>
          <Logo extraClasses={`logo my-auto transition-all `} />
          {props.lgView && (
            <p
              className={`logo-text font-mono text-belplit font-bold overflow-hidden transition-all duration-100`}
            >
              БЕЛПЛИТ
            </p>
          )}
        </div>
      </Link>
      <div
        className={`flex items-center justify-center border-slate-300 border-y-0 my-2 transition-all ${
          props.scrolled ? `border-opacity-0 ` : `duration-1000 border-opacity-100`
        }`}
      >
        {menu.map((item, index) => item.show && <NavLGItem item={item} key={`NAVLG${index}`} i={index} />)}
      </div>
      <div className={`flex items-center gap-2`}>
        <div className={`flex items-center font-light gap-2`}>
          <Social />
        </div>
        <div className={`bg-slate-500 mx-2 h-8`} style={{ width: 1 }}></div>
        <Button
          href={'#feedback'}
          className={`
          
          border-belplit 
            hover:text-belplit
            font-medium tracking-wider 
            hover:scale-105 
            transition-all rounded-md`}
        >
          {/* <Icons.Phone extraClasses={`w-10 h-10 text-slate-500`}/> */}
          {'Заказать звонок'}
        </Button>
      </div>
    </div>
  );
}
