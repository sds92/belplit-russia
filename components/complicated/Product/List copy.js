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
      setDelay(true);
      //   setTimeout(() => {
      //   }, 1);
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
            // onClick={() => setOpen(!open)}
          ></div>
          <div className={`flex`}>
              <Icons.ChevronDown extraClasses={`w-4 h-4`}/>
            <select
              name={`product-select`}
              className={
                `transition-all cursor-pointer z-50 w-full rounded-none bg-transparent ` + styles.select
              }
              onFocus={handleFocus}
              onChange={handleSelect}
              onBlur={handleClose}
              onClick={handleClick}
            >
              {listItems && (
                <>
                  <option value='' selected disabled hidden style={{backgroundColor: 'black'}}>
                    Выбрать другой товар...
                  </option>
                  {listItems.map((item, index) => (
                    <option
                      key={`PR${index}`}
                      className={`cursor-pointer flex hover:text-belplit border-b py-1`}
                      value={`/catalog/${item.id}`}
                      //   selected={curId === item.id && 'selected'}
                    >
                      {item.title}
                    </option>
                  ))}
                </>
              )}
            </select>
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
