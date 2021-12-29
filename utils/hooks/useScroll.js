import { useState, useEffect } from 'react';

export default function useScroll(el) {
  const [bodyOffset, setBodyOffset] = useState(
    el && typeof el == 'object' ? el.getBoundingClientRect() : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [sticky, setSticky] = useState(false)

  const listener = (e) => {
    setBodyOffset(
      el && typeof el == 'object' ? el.getBoundingClientRect() : document.body.getBoundingClientRect()
    );
    setScrollY(-bodyOffset.top);
    if (scrollY > 180) {setSticky(true)} else {setSticky(false)}
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    sticky
  };
}
