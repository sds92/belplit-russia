import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { Icons } from '..';

export default function ProductList({ listItems, inset = false, title = '', reset }) {
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [delay, setDelay] = React.useState(false);
  const [h, setH] = React.useState('100%');
  const router = useRouter();

  const handleClick = (a, id) => {
    a.stopPropagation();
    console.log('value', a.target);
    if (open) {
      setDelay(false);
      setOpen(false);
      if (id || id === 0) {
        router.push(`/catalog/${id}`);
        reset()
      }
    }
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        setDelay(true);
      }, 1);
    }
  };

  React.useEffect(() => {
    setH(window.innerHeight);
    if (open) {
      window.document.body.style.overflow = 'hidden';
      window.document.body.style.height = '100%';
      window.document.body.style.width = '100%';
      window.document.body.style.position = 'fixed';
    }
    if (!open) {
      window.document.body.style.overflow = 'auto';
      window.document.body.style.position = '';
      window.document.body.style.width = '';
      window.document.body.style.top = '';
    }
  }, [open]);

  return (
    <>
      {inset && (
        <>
          <div
            className={`${!open && `hidden`} h-screen w-full fixed z-40 top-0 bg-black overflow-hidden ${
              delay ? 'bg-opacity-40 ' : ' bg-opacity-0'
            } `}
            onClick={handleClick}
            style={{
              height: h,
              overflow: 'hidden',
              overflowBlock: 'hidden',
            }}
          ></div>
          <div onClick={handleClick} className={`bg-white flex flex-col w-full h-6 relative`}>
            <div className={`flex italic cursor-pointer text-zinc-800 font-light underline`}>
              <Icons.ChevronDown extraClasses={`w-6 h-6 text-belplit_dark active:scale-105`} />
              выбрать другой товар
            </div>
            {listItems && open && (
              <div
                className={
                  `fixed z-50 overflow-hidden mt-6 rounded-md bg-opacity-40 bg-black text-white font-light py-2 w-full duration-1000 transition-all ${
                    delay ? styles.visible : styles.hidden
                  } ` + styles.fade
                }
              >
                {listItems.map((item, index) => (
                  <div
                    className={`w-full px-4 transition-all cursor-pointer active:scale-105`}
                    onClick={(e) => handleClick(e, item.id)}
                    key={`PR${index}`}
                  >
                    {' > '}&nbsp;
                    <span className={` transition-all text-center ` + styles.popup}>{item.title}</span>
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
                  onClick={() => reset()}
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
