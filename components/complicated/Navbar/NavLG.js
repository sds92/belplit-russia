import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';

// etc
import { Icons } from '../../complicated';
import { useClickOut } from '../../../utils/hooks/useClickOut';
import { menu } from '../../../configs/menu';
import { app } from '../../../configs/app';

export default function NavLG() {
  const [show, setShow] = React.useState({ active: null });
  const ref = React.useRef(null);
  useClickOut(ref, show, () => setShow({ active: null }));

  function handleClick(e) {
    console.log('🚀 ~ file: NavLG.js ~ line 18 ~ handleClick ~ e', e);
  }

  React.useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <div ref={ref} className={`flex flex-row flex-nowrap justify-center`}>
          {menu.map((item, index) => (
            <React.Fragment key={`NAVLG${index}`}>
              {item.show && (
                <div id={`navlg${index}`} className={`flex items-center mx-1 relative`} key={`navlg${index}`}>
                  {item.active ? (
                    <Link href={`/${item.name}`}>
                      <a>{item.title}</a>
                    </Link>
                  ) : (
                    <div className={`cursor-pointer`} onClick={() => setShow({ active: index })}>
                      {item.title}
                    </div>
                  )}
                  {item.items.filter((item) => item.show).length !== 0 && (
                    <>
                      <Icons.ChevronDown
                        stroke={'#5d5e75'}
                        extraClasses={`${
                          show.active === index && `rotate-180`
                        } w-6 h-6 cursor-pointer active:border rounded-full transition-all`}
                        onClick={() => setShow({ active: index })}
                      />
                      {show.active === index && (
                        <div
                          style={{ bottom: '0px', marginBottom: '-100%' }}
                          className={`absolute rounded-md bg-gray-100 py-1 w-max z-50`}
                        >
                          {item.items.map((innerItem, innerIndex) => {
                            return (
                              innerItem.show && (
                                <div key={`NAVLGSUB${index}-${innerIndex}`}>
                                  <Link href={`/${item.name}/${innerItem.name}`}>
                                    <a>{innerItem.title}</a>
                                  </Link>
                                </div>
                              )
                            );
                          })}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Box>
    </div>
  );
}
