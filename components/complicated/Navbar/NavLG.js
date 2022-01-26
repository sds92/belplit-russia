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
    <div className={`flex justify-center gap-10 h-full my-auto py-2 px-2`}>
      <Link href={`/`} passHref>
        <div className={`flex transition-all cursor-pointer items-center`}>
          
          {props.lgView && (
            <p
              className={`logo-text font-sans-serif text-belplit_logo font-bold overflow-hidden transition-all duration-100`}
              style={{}}
            >
              БЕЛТЕРМО
            </p>
          )}
          <Logo extraClasses={`${props.lgView ? 'logo' : 'h-8 w-8'} transition-all`} />
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
          <Social mdView={props.mdView}/>
        </div>
        <div className={`bg-slate-500 mx-2 h-8`} style={{ width: 1 }}></div>
        <Button
          href={'#feedback'}
          className={`whitespace-nowrap hover:text-belplit uppercase font-bold transition-all`}
        >
          Заказать звонок
        </Button>
      </div>
    </div>
  );
}
