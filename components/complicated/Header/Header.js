// react
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// etc
import { Navbar, Icons, Logo } from '../';
import { Text } from '../../lib';
import { app } from '../../../configs/app';
import useScroll from '../../../utils/hooks/useScroll';

export default function Header(props) {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOnTop, setIsOnTop] = React.useState(true) 
  const { lgView } = props;
  const router = useRouter();
  const ref = React.useRef(null);
  const [scrollY] = useScroll(ref.current);

  React.useEffect(() => {
    setScrolled(true);
    setTimeout(() => {
      setScrolled(false);
    }, 700);
    if (scrollY <= 20) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
  }, [scrollY]);

  return (
    <>
      <div ref={ref}></div>
      <header
        className={`bg-slate-100 ${!isOnTop && `shadow-2xl`} z-50 fixed w-full ${
          scrolled ? `bg-opacity-10` : ``
        } transition-all`}
      >
        {/* <div style={{height: scrolled ? 0 : 1}} className={`w-full bg-slate-300 ${ scrolled ? `` : `delay-50 duration-300`} transition-all`}></div> */}
        <div className={`${scrolled ? `bg-opacity-20` : `delay-50 duration-300`}`}>
          <Navbar mdView={props.mdView} lgView={lgView} scrolled={scrolled} isOnTop={isOnTop}/>
        </div>
        {/* <div style={{height: scrolled ? 0 : 1}} className={`w-full bg-slate-300 ${ scrolled ? `` : `delay-50 duration-300`} transition-all`}></div> */}
      </header>
    </>
  );
}
