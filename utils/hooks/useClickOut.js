import React from 'react';
/**
 * Handles outside clicks
 */
export function useClickOut(ref, cb) {
  React.useEffect(() => {
    function handleClickOut(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOut);
    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [ref]);
}
