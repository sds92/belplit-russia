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
  const [isOnTop, setIsOnTop] = React.useState(true);
  const { lgView, mdView } = props;
  const router = useRouter();
  const ref = React.useRef(null);
  const [scrollY] = useScroll(ref.current) || 0;

  React.useEffect(() => {
    setScrolled(true);
    setTimeout(() => {
      setScrolled(false);
    }, 700);
    if (!scrollY || scrollY <= 60) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  }, [scrollY]);

  return (
    <>
      <header
        style={{
          left: '50%',
          transform: 'translate(-50%)',
        }}
        className={`shadow-md z-40 fixed px-2 w-full bg-white transition-all duration-100 
        ${lgView && 'h-20'} 
        ${isOnTop && !lgView && !mdView && 'h-20'}
        ${!isOnTop && !lgView && !mdView && 'h-10'}
        `}
      >
        {isOnTop && !mdView && !lgView && (
          <div className={`flex transition-all cursor-pointer items-center justify-center`}>
            <Logo extraClasses={`${props.lgView ? 'logo' : 'h-8 w-8'} transition-all`} />
            <p
              className={`text-4xl text-center font-mono text-belplit font-bold overflow-hidden transition-all duration-100 text`}
            >
              БЕЛТЕРМО
            </p>
          </div>
        )}
        <Navbar mdView={props.mdView} lgView={lgView} scrolled={scrolled} isOnTop={isOnTop} />
      </header>
      <div ref={ref}></div>
    </>
  );
}
