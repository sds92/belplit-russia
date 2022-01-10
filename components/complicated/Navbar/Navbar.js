// react
import React from 'react';
// components
import { Icons } from '../';
import app from '../../../data/app.json';
import NavSM from './NavSM';
import NavLG from './NavLG';

function Navbar(props) {
  const { lgView, children } = props;

  const [scrolled, setScrolled] = React.useState(false);
  const [opacity, setOpacity] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
      setOpacity(true);
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
        <div className={`fixed top-0 h-10 inset-0 bg-slate-100 bg-opacity-60 shadow-xl`}>
          <div className={`flex items-center justify-between`}>
            <NavSM />
            <div className={`flex`}>
              <Icons.Phone extraClasses={`w-6 h-6 text-belplit`} />
              <a href={`tel:${app.contacts.phones[0]}`} className={``}>
                {app.contacts.phones[1]}
              </a>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

export default Navbar;
