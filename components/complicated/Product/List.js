import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { Icons } from '..';

export default function ProductList({ listItems, inset = false, title = '' }) {
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [delay, setDelay] = React.useState(false);
  const router = useRouter();

  const curId = parseInt(router.asPath.split('/').reverse()[0]);

  const handleFocus = (a) => {
    setOpen(true);
    setTimeout(() => {
      setDelay(true);
    }, 1);
  };

  const handleClose = (b) => {
    setDelay(false);
    // setTimeout(() => {
    setOpen(false);
    // }, 1);
  };

  const handleSelect = (a) => {
    setDelay(false);
    setOpen(false);
    router.push(a.target.value);
    // setTimeout(() => {
    // }, 1);
  };

  const handleClick = (a) => {
    if (open) {
      setDelay(false);
      setOpen(false);
      //   setTimeout(() => {
      //   }, 1);
    }
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        setDelay(true);
      }, 1);
    }
  };

  return (
    <>
      {inset && (
        <>
          <div
            className={`${!open && `hidden`} fixed z-50 inset-0 bg-black overflow-hidden ${
              delay ? 'bg-opacity-40 ' : ' bg-opacity-0'
            } `}
            onClick={handleClick}
          ></div>
          <div onClick={handleClick} className={`bg-zinc-400 flex flex-col w-full h-6 relative`}>
            <div>
              <Icons.ChevronDown extraClasses={`w-6 h-6 text-white`} />
            </div>
            {listItems && open && (
              <div
                className={`fixed z-50 mt-6 rounded-md bg-opacity-40 bg-black text-white font-light py-2 w-full duration-1000 transition-all ${
                  delay ? styles.visible : styles.hidden
                } ` + styles.fade}
              >
                {listItems.map((item, index) => (
                  <div
                    className={`w-full px-4 transition-all cursor-pointer`}
                    value={item.id}
                    onClick={handleClick}
                    key={`PR${index}`}
                  >
                    {' > '}&nbsp;
                    <span className={` transition-all ` + styles.popup}>{item.title}</span>
                    <div className={`bg-zinc-500`} style={{ width: '100%', height: 1 }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
      {!inset && (
        <div className={`px-4 w-full py-2`}>
          {title && title}
          {listItems &&
            listItems.map((item, index) => (
              <Link key={`PR${index}`} href={`/catalog/${item.id}`} passHref>
                <div
                  className={`cursor-pointer flex hover:text-belplit border-b py-1`}
                  onMouseEnter={() => setHover({ [index]: true })}
                  onMouseLeave={() => setHover({ [index]: false })}
                >
                  <span
                    className={`trans-menu-item transition-duration-500 ${
                      !hover[index] ? 'w-1 opacity-0' : 'w-3 opacity-100'
                    }`}
                  >
                    {'>'}
                  </span>
                  &nbsp;
                  {item.title}
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}
