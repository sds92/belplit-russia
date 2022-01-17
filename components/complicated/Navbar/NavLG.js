// react
import React from 'react';

// etc
import Logo from '../Svg/Logo';
import NavLGItem from './NavLGItem';
import { Button } from '../../lib';
import { Social } from '..';
import { menu } from '../../../configs/menu';

export default function NavLG(props) {
  return (
    <div className={`flex justify-center gap-10 h-full my-auto py-2`}>
      <div className={`flex logo-box transition-all`}>
        <Logo extraClasses={`logo my-auto transition-all `} />
        {props.lgView && <p
          className={`logo-text font-mono text-belplit font-bold overflow-hidden transition-all duration-100`}
        >
          БЕЛПЛИТ
        </p>}
      </div>
      <div
        className={`flex items-center justify-center border-slate-300 border-y-0 my-2 transition-all ${
          props.scrolled ? `border-opacity-0 ` : `duration-1000 border-opacity-100`
        }`}
      >
        {menu.map((item, index) => item.show && <NavLGItem item={item} key={`NAVLG${index}`} i={index} />)}
      </div>
      <div className={`flex flex-col gap-2`}>
        <div className={`flex items-center font-light gap-2`}>
          <Social />
        </div>
        <Button className={`bg-belplit hover:bg-belplit_dark text-white font-medium tracking-wider`}>
          {'Заказать звонок'}
        </Button>
      </div>
    </div>
  );
}
