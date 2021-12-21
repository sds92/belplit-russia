import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// etc
import { useClickOut } from '../../../utils/hooks/useClickOut';
import { menu } from '../../../configs/menu';
import { app } from '../../../configs/app';

export default function NavLG() {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);
  useClickOut(ref, () => setShow(false));

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <div className={`flex flex-row flex-nowrap justify-center`}>
          {menu.map((item, index) => (
            <>
              {item.show && (
                <div className={`flex items-center mx-1 relative`} key={`NAVLG${index}`}>
                  {item.active ? (
                    <Link href={`/${item.name}`}>
                      <a>{item.title}</a>
                    </Link>
                  ) : (
                    <div>{item.title}</div>
                  )}
                  {item.items.filter((item) => item.show).length !== 0 && (
                    <>
                      <div onClick={() => setShow(!show)}>!!</div>
                      {show && (
                        <div
                          ref={ref}
                          style={{ bottom: '-10px', marginBottom: '-100%' }}
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
            </>
          ))}
        </div>
      </Box>
    </div>
  );
}
