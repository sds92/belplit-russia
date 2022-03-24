// react
import React from 'react';
import { useRouter } from 'next/router';

// etc
import { Navbar, Icons, Logo } from '../';
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
        className={`shadow-md z-40 fixed w-full bg-white transition-all duration-100`}
      >
        <div className={`max-w-7xl mx-auto tracking-tight`}>
          <Navbar w={props.w} mdView={props.mdView} lgView={lgView} scrolled={scrolled} isOnTop={isOnTop} />
        </div>
      </header>
      <div ref={ref}></div>
    </>
  );
}
