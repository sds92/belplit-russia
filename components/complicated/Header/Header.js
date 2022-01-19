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
  const [scrollY] = useScroll(ref.current);

  React.useEffect(() => {
    setScrolled(true);
    setTimeout(() => {
      setScrolled(false);
    }, 700);
    if (scrollY <= 20) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  }, [scrollY]);

  return (
    <>
      <header
        style={{
          // top: '50%',
          // top: "4%",
          left: '50%',
          transform: 'translate(-50%)',
        }}
        className={` ${!isOnTop && lgView && `shadow-2xl`} shadow-md z-50 fixed px-2 ${
          lgView ? 'h-20 bg-zinc-100' : 'h-10 bg-zinc-100 '
        } mt-1 transition-all rounded-md  `}
      >
        <Navbar mdView={props.mdView} lgView={lgView} scrolled={scrolled} isOnTop={isOnTop} />
      </header>
      <div ref={ref}></div>
    </>
  );
}
