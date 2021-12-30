// react
import React from 'react';
// components
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  const { lgView, children } = props;

  const [scrolled, setScrolled] = React.useState(false);
  const [opacity, setOpacity] = React.useState(false)
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
      setOpacity(true)
    } else {
      setScrolled(false);
    }
    if (offset > 120) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={` ${!lgView ? `flex justify-between items-center` : ``}`}>
      {lgView ? <NavLG /> : <NavSM />}
      {scrolled && lgView && (
        <div className={`fixed top-0 w-full bg-slate-100 ${opacity ? 'bg-opacity-95' : ''} border-0 `}>
          <NavLG />
        </div>
      )}
      {scrolled && !lgView && (
        <div className={`fixed top-1 left-1 w-10 h-10 rounded-md bg-slate-100 bg-opacity-60 shadow-xl`}>
          
          <NavSM />
        </div>
      )}
      {children}
    </div>
  );
}

export default Navbar;
