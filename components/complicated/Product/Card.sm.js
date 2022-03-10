import React from 'react';
import Link from 'next/link';

export default function ProductCardSM(props) {
  const { title, files, id, prices, name } = props.product;

  return (
    <Link href={`/catalog/${name}`} passHref>
      <div className={`m-2 relative transition-all active:scale-105 hover:scale-105 rounded-md`}>
        <div className={`flex flex-col justify-between w-full items-start h-full`}>
          <div className={`w-full rounded-md `}>
            <div
              className={`z-10 relative w-full h-60 cursor-pointer shadow-md rounded-md overflow-hidden`}
              style={{
                background: `no-repeat url(images/products/sm/${files.avatarSM})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className={`flex flex-col justify-between h-full relative w-full px-4 rounded-md`}>
              <div
                className={`flex text-zinc-800 items-center h-10 cursor-pointer text-base transition-all font-bold `}
              >
                <div className={` pb-1 text-zinc-900`}>
                  <span className={` font-bold uppercase`}>{props.product.displayName && `Белплит ${props.product.displayName}` || name}</span>

                  <span className={` font-light text-zinc-400 hover:text-belplit_dark`}> / Подробнее</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
